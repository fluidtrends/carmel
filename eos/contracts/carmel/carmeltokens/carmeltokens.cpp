#include "carmeltokens.hpp"

namespace carmel {

  //////////////////////////////////////////////////////////////
  ///////////////////         ACTIONS        ///////////////////
  //////////////////////////////////////////////////////////////

  void tokens::create(name issuer, asset maximum_supply) {

    // Make sure that only the owner of the contract can call this action
    require_auth(_self);

    // Look at the symbol and detect its type automatically
    auto sym = maximum_supply.symbol;

    // Make sure we are working with a valid name
    eosio_assert(sym.is_valid(), "invalid symbol name");

    // Make sure the supply is a valid amount
    eosio_assert(maximum_supply.is_valid(), "invalid supply");

    // Also ensure the amount is not negative
    eosio_assert(maximum_supply.amount > 0, "max-supply must be positive");

    // Allocate memory for a new table scoped with the given token symbol
    stats statstable(_self, sym.code().raw());

    // Let's see if the symbol exists in this table
    auto existing = statstable.find(sym.code().raw());

    // Looks like this token was already created, so we stop right here
    eosio_assert(existing == statstable.end(), "token with symbol already exists");

    // Alright, we can create the table now
    statstable.emplace(_self, [&](auto& s) {
       s.supply.symbol = maximum_supply.symbol;
       s.max_supply    = maximum_supply;
       s.issuer        = issuer;
    });
  }

  void tokens::issue(name to, asset quantity, string memo) {

    // Start by ensuring the symbol is valid
    auto sym = quantity.symbol;
    eosio_assert(sym.is_valid(), "invalid symbol name");

    // We're not going to accept long memos
    eosio_assert(memo.size() <= 256, "memo has more than 256 bytes");

    // Time to lookup the token table
    stats statstable(_self, sym.code().raw());
    auto existing = statstable.find(sym.code().raw());

    // Looks like this token was not created yet
    eosio_assert(existing != statstable.end(), "token with symbol does not exist, create token before issue");

    // Alright, we got a reference to the token table now
    const auto& st = *existing;

    // Make sure we can proceed with this issuance
    validate_issuance(quantity, st);

    // We're ready, so let's just increase the supply accordingly
    statstable.modify(st, same_payer, [&](auto& s) {
       s.supply += quantity;
    });

    // Good, now we're going to give the owner the tokens first
    add_balance(st.issuer, quantity, st.issuer);

    if (to != st.issuer) {
      // As long as the issuer is not giving themselves the tokens,
      // then just transfer the tokens from the issuer to the receiver
      SEND_INLINE_ACTION(*this, transfer, {{ st.issuer, "active"_n }}, { st.issuer, to, quantity, memo });
    }
  }

  void tokens::retire(asset quantity, string memo) {

    // Start by ensuring the symbol is valid
    auto sym = quantity.symbol;
    eosio_assert(sym.is_valid(), "invalid symbol name");

    // We don't want to accept long memos
    eosio_assert(memo.size() <= 256, "memo has more than 256 bytes");

    // Let's lookup the token table
    stats statstable(_self, sym.code().raw());
    auto existing = statstable.find(sym.code().raw());

    // Oops, this token was not created yet
    eosio_assert(existing != statstable.end(), "token with symbol does not exist");

    // We now have a reference to the token table now
    const auto& st = *existing;

    // Let's ensure we can proceed with this issuance
    validate_issuance(quantity, st);

    // Great, so let's just decrease the supply accordingly
    statstable.modify(st, same_payer, [&](auto& s) {
       s.supply -= quantity;
    });

    // One last thing, let's just
    sub_balance(st.issuer, quantity);
  }

  void tokens::transfer(name from, name to, asset quantity, string memo) {

    // First of all, don't allow holders to transfer tokens to themselves
    eosio_assert(from != to, "cannot transfer to self");

    // Next, let's make sure the signer is transferring their own tokens
    require_auth(from);

    // We also want to ensure the account they want to transfer tokens to is valid
    eosio_assert(is_account(to), "to account does not exist");

    // Great so let's lookup the token table
    auto sym = quantity.symbol.code();
    stats statstable(_self, sym.raw());
    const auto& st = statstable.get(sym.raw());

    // Now let's copy this action to the sender so they can see it as a receipt
    require_recipient(from);

    // And let's also make sure the receiver gets a copy of the action as a receipt
    require_recipient(to);

    // Alright, now let's see if the requested quantity is ok
    eosio_assert(quantity.is_valid(), "invalid quantity");

    // The quantity is valid, but make sure the amount is positive
    eosio_assert(quantity.amount > 0, "must transfer positive quantity");

    // Also make sure the symbol is identical
    eosio_assert(quantity.symbol == st.supply.symbol, "symbol precision mismatch");

    // And finally, let's keep the memo short enough
    eosio_assert(memo.size() <= 256, "memo has more than 256 bytes");

    // Decide who is goign to pay for this and make sure that if
    // we're transferring tokens to an account that has ownership
    // of this contract, we will make that account pay, otherwise
    // let the sender pay for this transaction
    auto payer = has_auth(to) ? to : from;

    // First, take the tokens away from the sender
    sub_balance(from, quantity);

    // Woohoo, finally, give the received the tokens
    add_balance(to, quantity, payer);
  }

  //////////////////////////////////////////////////////////////
  ////////////////         EVENT HANDLERS        ///////////////
  //////////////////////////////////////////////////////////////

  void tokens::distribute(name from, name to, asset quantity, string memo) {

    // Ignore events not pertaining to us
    eosio_assert(to == _self, "wrong contract");

    // This is when the distribution period stops (07/03/2019)
    int64_t end_time = 1551916800;

    // And this is the time we're looking at right now
    int64_t now = current_time() / 1000000;

    // Looks like the distribution period stopped a while ago
    eosio_assert(now < end_time, "The distribution period has ended");

    // We only consider transfers of 10.0000 EOS or more
    eosio_assert(quantity.symbol.is_valid(), "Invalid quantity");
    eosio_assert(quantity.symbol == EOS_SYMBOL, "Only EOS tokens are allowed");
    eosio_assert(quantity.amount >= 100000, "Please send at least 10 EOS");

    // Look up the token table and make sure it's initialized
    stats statstable(_self, CARMEL_SYMBOL.code().raw());
    auto existing = statstable.find(CARMEL_SYMBOL.code().raw());
    eosio_assert(existing != statstable.end(), "The CARMEL token does not exist");
    const auto& st = *existing;

    // This is the distribution token price in EOS
    double distribution_price = 0.0050;

    // Figure out how many tokens to distribute
    asset amount = asset(quantity.amount / distribution_price, CARMEL_SYMBOL);

    // Let's make sure the account sending the transfer will get a receipt for this claim
    require_recipient(to);

    // Distribute the tokens
    SEND_INLINE_ACTION(*this, issue, {{ st.issuer, "active"_n }}, { from, amount, "token distribution"});
  }

  //////////////////////////////////////////////////////////////
  ///////////////////         HELPERS        ///////////////////
  //////////////////////////////////////////////////////////////

  void tokens::validate_issuance(asset quantity, currency_stats st) {

    // Let's make sure only the token issuer can call this action
    require_auth(st.issuer);

    // Now let's see if the requested quantity is valid
    eosio_assert(quantity.is_valid(), "invalid quantity");

    // The quantity is valid, but let's see if the amount is positive
    eosio_assert(quantity.amount > 0, "must issue positive quantity");

    // We also want to make sure the symbol is identical
    eosio_assert(quantity.symbol == st.supply.symbol, "symbol precision mismatch");

    // Alright, last step here, let's make sure we have enough tokens left
    eosio_assert(quantity.amount <= st.max_supply.amount - st.supply.amount, "quantity exceeds available supply");
  }

  void tokens::sub_balance(name owner, asset value) {

    // Look up the account for the given owner
    accounts from_acnts(_self, owner.value);

    // Make sure that this account has a token with the given symbol
    const auto& from = from_acnts.get(value.symbol.code().raw(), "no balance object found");

    // Let's also ensure that there's enough tokens to withdraw from
    eosio_assert(from.balance.amount >= value.amount, "overdrawn balance");

    // Finally, simply update this account's balance
    from_acnts.modify(from, owner, [&](auto& a) {
      a.balance -= value;
    });
  }

  void tokens::add_balance(name owner, asset value, name ram_payer) {

    // Find the account for the given owner and the given token value
    accounts to_acnts(_self, owner.value);
    auto to = to_acnts.find(value.symbol.code().raw());

    if (to == to_acnts.end()) {
      // If the account does not have any tokens, initialize
      // their balance for the first time ever
      to_acnts.emplace(ram_payer, [&](auto& a){
        a.balance = value;
      });

    } else {
      // But if the account has tokens, then just add the
      // new tokens to the existing balance
      to_acnts.modify(to, same_payer, [&](auto& a) {
        a.balance += value;
      });
    }
  }

} /// namespace carmel

extern "C" {
  void apply(uint64_t receiver, uint64_t code, uint64_t action) {

    if (code == "eosio.token"_n.value && action == "transfer"_n.value) {
      // If we receive an EOS transfer, attempt to distribute tokens
      execute_action(name(receiver), name(code), &carmel::tokens::distribute);
    }

    else if (code == receiver) {
        switch (action) {
          // Dispatch the public contract actions
          EOSIO_DISPATCH_HELPER(carmel::tokens, (create)(issue)(transfer)(retire))
        }
    }
  }
}
