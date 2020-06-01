/**
    carmelsystem

    This is the official Carmel EOS smart contract governing
    the CARMEL EOS System. 
    All actions herein are described in detail in the Ricardian
    contracts document.

    This contract is subject to the clauses described in the
    Ricardian clauses document.

    @author I. Dan Calinescu (@idancali)
    @version 1.0.0 16/05/20
*/

#include <eosio/asset.hpp>
#include <eosio/time.hpp>
#include <eosio/eosio.hpp>
#include <eosio/system.hpp>
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
using namespace std;

namespace eosiosystem {
   class system_contract;
}

namespace carmel {

   using std::string;

   class [[eosio::contract("carmelsystem")]] system : public contract {
      public:
         using contract::contract;

         system(name receiver, name code, datastream<const char*> ds )
         : contract(receiver, code, ds) {}

        [[eosio::action]]
        void newquest(name author, string uri);

        [[eosio::action]]
        void startquest(name user, uint64_t quest_id);

        [[eosio::action]]
        void neweffort(name user, uint64_t quest_id, int8_t challenge_id, int8_t task_id, string message, string status);

      private:

        struct [[eosio::table]] quest_table {
            uint64_t id;
            name author;
            uint64_t created_on;
            uint64_t started_on;
            string uri;
            string status;
 
            uint64_t primary_key() const { return id; }
        };

        struct [[eosio::table]] effort_table {
            uint64_t id;
            uint64_t created_on;
            uint64_t quest_id;
            string message;
            string status;
            int8_t challenge_id;
            int8_t task_id;

            uint64_t primary_key() const { return id; }
        };

        typedef eosio::multi_index<"quests"_n, quest_table> quests_index;
        typedef eosio::multi_index<"effort"_n, effort_table> effort_index;
   };
} /// namespace carmel
