/**
    carmeltokens

    This is the official Carmel EOS smart contract governing
    the CARMEL EOS token. The primary purpose of this contract
    is to keep track of tokenholder balances and to handle
    token transfers between tokenholders.

    All actions herein are described in detail in the Ricardian
    contracts document.

    This contract is subject to the clauses described in the
    Ricardian clauses document.

    @author I. Dan Calinescu (@idancali)
    @version 1.0.0 16/01/19
*/

#include <eosiolib/asset.hpp>
#include <eosiolib/time.hpp>
#include <eosiolib/eosio.hpp>
#include <string>

#ifdef MAINNET
  #define CARMEL_SYMBOL symbol("CARMEL", 4)
  #define EOS_SYMBOL symbol("EOS", 4)
#elif TESTNET
  #define CARMEL_SYMBOL symbol("CARMELZ", 4)
  #define EOS_SYMBOL symbol("EOS", 4)
#else
  #define CARMEL_SYMBOL symbol("CARMELD", 4)
  #define EOS_SYMBOL symbol("EOS", 4)
#endif

using namespace eosio;

namespace eosiosystem {
   class system_contract;
}

namespace carmel {

   using std::string;

   class [[eosio::contract("carmeltokens")]] tokens : public contract {
      public:

         using contract::contract;

         tokens(name receiver, name code, datastream<const char*> ds )
         : contract(receiver, code, ds) {}

         [[eosio::action]]
         void create(name issuer, asset maximum_supply);

         [[eosio::action]]
         void issue(name to, asset quantity, string memo);

         [[eosio::action]]
         void transfer(name from, name to, asset quantity, string memo);

         [[eosio::action]]
         void retire( asset quantity, string memo );

         void distribute(name from, name to, asset quantity, string memo);

         static asset get_supply(name token_contract_account, symbol_code sym_code)
         {
            stats statstable(token_contract_account, sym_code.raw());
            const auto& st = statstable.get(sym_code.raw());
            return st.supply;
         }

         static asset get_balance(name token_contract_account, name owner, symbol_code sym_code)
         {
            accounts accountstable(token_contract_account, owner.value);
            const auto& ac = accountstable.get(sym_code.raw());
            return ac.balance;
         }

      private:
         struct [[eosio::table]] account {
            asset balance;

            uint64_t primary_key() const { return balance.symbol.code().raw(); }
         };

         struct [[eosio::table]] currency_stats {
            asset supply;
            asset max_supply;
            name issuer;

            uint64_t primary_key() const { return supply.symbol.code().raw(); }
         };

         typedef eosio::multi_index < "accounts"_n, account > accounts;
         typedef eosio::multi_index < "stat"_n, currency_stats > stats;

         void sub_balance(name owner, asset value);
         void add_balance(name owner, asset value, name ram_payer);
         void validate_issuance(asset quantity, currency_stats st);
   };
} /// namespace carmel
