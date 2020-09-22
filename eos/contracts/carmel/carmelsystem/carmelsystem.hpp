/**
    carmelsystem

    This is the official Carmel EOS smart contract governing
    the Carmel EOS System. 
    
    All actions herein are described in detail 
    in the Ricardian contracts document.

    This contract is subject to the clauses described in the
    Ricardian clauses document.

    @author I. Dan Calinescu (@idancali)
*/

#include <eosio/asset.hpp>
#include <eosio/time.hpp>
#include <eosio/eosio.hpp>
#include <eosio/system.hpp>
#include <string>
#include <vector>

#define CARMEL_MINUTE   60
#define CARMEL_HOUR     3600
#define CARMEL_DAY      86400
#define CARMEL_WEEK     604800      // 7 days
#define CARMEL_MONTH    2592000     // 30 days
#define CARMEL_YEAR     31536000    // 365 days
#define CARMEL_FOREVER  31536000000 // 1000 years

#define CARMEL_SYS "carmelsystem"_n
#define CARMEL_TOK "carmeltokens"_n
#define CARMEL_CRE "carmelcredit"_n

#define CARMEL_SYMBOL symbol("CARMEL", 4)
#define EOS_SYMBOL symbol("EOS", 4)

#define CARMEL_ACCESS_LEVEL_SYS      900
#define CARMEL_ACCESS_LEVEL_SYSADMIN 800
#define CARMEL_ACCESS_LEVEL_ADMIN    700

#define CARMEL_ACCESS_LEVEL_MOD      500

#define CARMEL_ACCESS_LEVEL_USER     100

using namespace eosio;
using namespace std;

namespace eosiosystem {
   class system_contract;
}

namespace carmel {

   using std::string;
   using std::vector;

   class [[eosio::contract("carmelsystem")]] system : public contract {
      public:
        using contract::contract;

        system(name receiver, name code, datastream<const char*> ds )
         : contract(receiver, code, ds) {}

        [[eosio::action]]
        void newuser(name account, name username, string fullname, string details);

        [[eosio::action]]
        void newsysadmin(name account, name username);
        
        [[eosio::action]]
        void newadmin(name account, name superadmin, name username);

        [[eosio::action]]
        void newplan(name account, name plan_name, int duration, long price, int min_seats);

        [[eosio::action]]
        void addsetting(name account, name key, string value);

        [[eosio::action]]
        void newartifact(name account, name author, name artifactname, name type, string details);

        [[eosio::action]]
        void addartifactv(name account, name author, name artifactname, string version);

        [[eosio::action]]
        void addchallenge(name account, name author, name bundle, name stack, name name, uint16_t total_tasks, vector<string> skills, string details);
 
        [[eosio::action]]
        void addchvers(name account, name author, name bundle, name name, string version);

        [[eosio::action]]
        void addtemplate(name account, name author, name bundle, name name, string details);
 
        [[eosio::action]]
        void addtemplatev(name account, name author, name bundle, name name, string version);

        [[eosio::action]]
        void trychallenge(name account, name user, name challenge_name);

        [[eosio::action]]
        void addeffort(name account, name user, name challenge_name, bool successful, string results);
     
        [[eosio::on_notify("eosio.token::transfer")]]
        void topup(name from, name to, asset quantity, string memo);

        [[eosio::on_notify("carmeltokens::transfer")]]
        void newpayment(name from, name to, asset quantity, string memo);

        using newuser_action        = action_wrapper<"newuser"_n, &system::newuser>;
        using newsysadmin_action    = action_wrapper<"newsysadmin"_n, &system::newsysadmin>;
        using newadmin_action       = action_wrapper<"newadmin"_n, &system::newadmin>;
        using newartifact_action    = action_wrapper<"newartifact"_n, &system::newartifact>;
        using addartifactv_action   = action_wrapper<"addartifactv"_n, &system::addartifactv>;
        using addchallenge_action   = action_wrapper<"addchallenge"_n, &system::addchallenge>;
        using addchvers_action      = action_wrapper<"addchvers"_n, &system::addchvers>;
        using addtemplate_action    = action_wrapper<"addtemplate"_n, &system::addtemplate>;
        using addtemplatev_action   = action_wrapper<"addtemplatev"_n, &system::addtemplatev>;
        using trychallenge_action   = action_wrapper<"trychallenge"_n, &system::trychallenge>;
        using addeffort_action      = action_wrapper<"addeffort"_n, &system::addeffort>;
        using newplan_action        = action_wrapper<"newplan"_n, &system::newplan>;
        using topup_action          = action_wrapper<"topup"_n, &system::topup>;

      private:

        struct [[eosio::table]] payments_table {
            uint64_t id;
            name plan_name;
            name account;
            name username;
            long price;
            int seats;
            uint64_t created_timestamp;

            uint64_t primary_key() const { return id; }
            uint64_t secondary_key() const { return username.value; }
        };

        struct [[eosio::table]] topups_table {
            uint64_t id;
            name account;
            long eos;
            long carmel;
            long carmelusd;
            long usdeos;
            uint64_t created_timestamp;

            uint64_t primary_key() const { return id; }
            uint64_t secondary_key() const { return account.value; }
        };

         struct [[eosio::table]] plans_table {
            uint64_t id;
            name plan_name;
            int duration;
            uint64_t created_timestamp;
            uint64_t modified_timestamp;
            long price;
            int min_seats;

            uint64_t primary_key() const { return id; }
            uint64_t secondary_key() const { return plan_name.value; }
        };

        struct [[eosio::table]] settings_table {
            uint64_t id;
            name key;
            string value;
            uint64_t created_timestamp;
            uint64_t modified_timestamp;

            uint64_t primary_key() const { return id; }
            uint64_t secondary_key() const { return key.value; }
        };


        struct [[eosio::table]] users_table {
            uint64_t id;
            uint64_t created_timestamp;
            uint64_t modified_timestamp;
            uint16_t level;
            name account;
            name username;
            name plan_name;
            uint64_t plan_id;
            uint64_t plan_start_timestamp;
            uint64_t plan_expire_timestamp;
            int plan_seats_available;
            string fullname;
            string status;
            string details;
 
            uint64_t primary_key() const { return id; }
            uint64_t secondary_key() const { return username.value; }
        };
        
        struct [[eosio::table]] artifacts_table {
            uint64_t id;
            uint64_t created_timestamp;
            uint64_t modified_timestamp;
            name account;
            name author;
            name artifactname;
            name type;
            vector<string> versions;
            string status;
            string details;
 
            uint64_t primary_key() const { return id; }
            uint64_t secondary_key() const { return artifactname.value; }
        };

        struct [[eosio::table]] challenges_table {
            uint64_t id;
            uint64_t created_timestamp;
            uint64_t modified_timestamp;
            uint16_t total_tasks;
            name account;
            name author;
            name bundle;
            name stack;
            vector<string> skills;
            vector<string> versions;
            name name;
            string status;
            string details;
 
            uint64_t primary_key() const { return id; }
            uint64_t secondary_key() const { return name.value; }
        };

        struct [[eosio::table]] templates_table {
            uint64_t id;
            uint64_t created_timestamp;
            uint64_t modified_timestamp;
            name account;
            name author;
            name bundle;
            vector<string> versions;
            name name;
            string status;
            string details;
 
            uint64_t primary_key() const { return id; }
            uint64_t secondary_key() const { return name.value; }
        };

        struct [[eosio::table]] progress_table {
            uint64_t id;
            uint64_t challenge_id;
            uint64_t started_timestamp;
            uint64_t updated_timestamp;
            uint16_t task_index;
            uint16_t total_tasks;
            name challenge_name;
            name account;
            name user;
            bool done;
            string status;
 
            uint64_t primary_key() const { return id; }
            uint64_t secondary_key() const { return challenge_id; }
        };                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          

        struct [[eosio::table]] effort_table {
            uint64_t id;
            uint64_t challenge_id;
            uint16_t task_index;
            uint16_t verifications;
            uint64_t created_timestamp;
            uint64_t modified_timestamp;
            name challenge_name;
            name account;
            name user;
            string status;
            bool successful;
            string results;
 
            uint64_t primary_key() const { return id; }
            uint64_t secondary_key() const { return challenge_id; }
        };   

        struct [[eosio::table]] validations_table {
            uint64_t id;
            uint64_t created_timestamp;
            uint64_t modified_timestamp;
            uint64_t effort_id;
            uint16_t passes;
            uint16_t fails;
            bool expected_success;
            string status;
 
            uint64_t primary_key() const { return id; }
            uint64_t secondary_key() const { return effort_id; }
        }; 

        typedef eosio::multi_index<"artifacts"_n, artifacts_table, indexed_by<"nameidx"_n, const_mem_fun<artifacts_table, uint64_t, &artifacts_table::secondary_key>>> artifacts_index;
        typedef eosio::multi_index<"users"_n, users_table, indexed_by<"usernameidx"_n, const_mem_fun<users_table, uint64_t, &users_table::secondary_key>>> users_index;
        typedef eosio::multi_index<"challenges"_n, challenges_table, indexed_by<"nameidx"_n, const_mem_fun<challenges_table, uint64_t, &challenges_table::secondary_key>>> challenges_index;
        typedef eosio::multi_index<"templates"_n, templates_table, indexed_by<"nameidx"_n, const_mem_fun<templates_table, uint64_t, &templates_table::secondary_key>>> templates_index;
        typedef eosio::multi_index<"progress"_n, progress_table, indexed_by<"challengeidx"_n, const_mem_fun<progress_table, uint64_t, &progress_table::secondary_key>>> progress_index;
        typedef eosio::multi_index<"effort"_n, effort_table, indexed_by<"challengeidx"_n, const_mem_fun<effort_table, uint64_t, &effort_table::secondary_key>>> effort_index;
        typedef eosio::multi_index<"validations"_n, validations_table, indexed_by<"effortidx"_n, const_mem_fun<validations_table, uint64_t, &validations_table::secondary_key>>> validations_index;
        typedef eosio::multi_index<"plans"_n, plans_table, indexed_by<"nameidx"_n, const_mem_fun<plans_table, uint64_t, &plans_table::secondary_key>>> plans_index;
        typedef eosio::multi_index<"settings"_n, settings_table, indexed_by<"keyidx"_n, const_mem_fun<settings_table, uint64_t, &settings_table::secondary_key>>> settings_index;
        typedef eosio::multi_index<"payments"_n, payments_table, indexed_by<"usernameidx"_n, const_mem_fun<payments_table, uint64_t, &payments_table::secondary_key>>> payments_index;
        typedef eosio::multi_index<"topups"_n, topups_table, indexed_by<"acccountidx"_n, const_mem_fun<topups_table, uint64_t, &topups_table::secondary_key>>> topups_index;

        uint64_t now();
        auto getplan(name plan_name);
        auto getuser(users_index *users, name username, bool expect_exists);
        auto getartifact (artifacts_index *artifacts, name name, bool expect_exists);
        auto getchallenge (challenges_index *challenges, name name, bool expect_exists);
        auto gettemplate (templates_index *templates, name name, bool expect_exists);
        auto getsetting (name key);
   };
} /// namespace carmel
