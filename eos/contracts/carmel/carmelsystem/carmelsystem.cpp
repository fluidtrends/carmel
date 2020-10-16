#include "carmelsystem.hpp"

namespace carmel {

    /** @private **/
    uint64_t system::now() {
       return current_time_point().sec_since_epoch();
    }

    /** @private **/
    auto system::getplan(name plan_name) {
        plans_index plans(get_self(), get_self().value);

        // Let's take a look at the plans we have on file
        auto plans_idx = plans.get_index<"nameidx"_n>();

        // Look up the requested plan
        auto plan = plans_idx.find(plan_name.value);

        // Make sure it does exist
        check(plan != plans_idx.end(), "The plan does not exist");

        // Send back the index if we got this far, so we can modify it
        return plan;
    }

    /** @private **/
    auto system::getsetting(name key) {
        settings_index settings(get_self(), get_self().value);

        // Let's take a look at the plans we have on file
        auto settings_index = settings.get_index<"keyidx"_n>();

        // Look up the requested setting
        auto setting = settings_index.find(key.value);

        // Make sure it does exist
        check(setting != settings_index.end(), "The setting does not exist");

        // Send back the index if we got this far, so we can modify it
        return setting->value;
    }

    /** @private **/
    auto system::getuser(users_index *users, name username, bool expect_exists) {
        // Let's take a look at the usernames we have on file
        auto usernames_idx = users->get_index<"usernameidx"_n>();

        // Look up the requested username
        auto username_result = usernames_idx.find(username.value);

        if (expect_exists) {
            // Make sure it does exist
            check(username_result != usernames_idx.end(), "The user does not exist");
        } else {
            // Make sure it does not exist
            check(username_result == usernames_idx.end(), "The username is already taken");
        }

        // Send back the index if we got this far, so we can modify it
        return make_tuple(usernames_idx, username_result);
    }

    /** @private **/
    auto system::getartifact (artifacts_index *artifacts, name name, bool expect_exists) {
        // Let's take a look at the artifact names we have on file
        auto artifacts_idx = artifacts->get_index<"nameidx"_n>();

        // Look up the requested artifact 
        auto artifacts_result = artifacts_idx.find(name.value);

        if (expect_exists) {
            // Make sure it does exist
            check(artifacts_result != artifacts_idx.end(), "The artifact does not exist");
        } else {
            // Make sure it does not exist
            check(artifacts_result == artifacts_idx.end(), "The artifact is already taken");
        }

        // Send back the index if we got this far, so we can modify it
        return make_tuple(artifacts_idx, artifacts_result);
    }

    /** @private **/
    auto system::getchallenge (challenges_index *challenges, name name, bool expect_exists) {
        // Let's take a look at the challenge names we have on file
        auto challenges_idx = challenges->get_index<"nameidx"_n>();

        // Look up the requested challenges
        auto challenge_result = challenges_idx.find(name.value);

        if (expect_exists) {
            // Make sure it does exist
            check(challenge_result != challenges_idx.end(), "The challenge does not exist");
        } else {
            // Make sure it does not exist
            check(challenge_result == challenges_idx.end(), "The challenge name is already taken");
        }

        // Send back the index if we got this far, so we can modify it
        return make_tuple(challenges_idx, challenge_result);
    }

     /** @private **/
    auto system::addskills(map<string, int> original, map<string, int> additions) {
        map<string, int> result;

        for (auto& i: additions) {
            map<string, int>::iterator found = original.find(i.first);
            if (found != original.end()) {
                result.emplace(i.first, i.second + found->second);
            } else {
                result.emplace(i.first, i.second);
            }
        }

        return result;
    }

    /** @private **/
    auto system::gettemplate (templates_index *templates, name name, bool expect_exists) {
        // Let's take a look at the template names we have on file
        auto templates_idx = templates->get_index<"nameidx"_n>();

        // Look up the requested templates
        auto template_result = templates_idx.find(name.value);

        if (expect_exists) {
            // Make sure it does exist
            check(template_result != templates_idx.end(), "The template does not exist");
        } else {
            // Make sure it does not exist
            check(template_result == templates_idx.end(), "The template name is already taken");
        }

        // Send back the index if we got this far, so we can modify it
        return make_tuple(templates_idx, template_result);
    }

    [[eosio::on_notify("eosio.token::transfer")]]
    void system::topup(name from, name to, asset quantity, string memo) {
      if (to != CARMEL_SYS) {
          return;
      }

      check(quantity.symbol == EOS_SYMBOL, "Invalid currency");
      check(quantity.amount >= 100000, "At least 10 EOS required");

      topups_index topups(get_self(), get_self().value);
      long carmelusd = stol(getsetting("carmelusd"_n));
      long usdeos = stol(getsetting("usdeos"_n));
      long credits = long(((double)carmelusd * ((double)quantity.amount / 10000) * (double)((double)usdeos / 10000)));

      // Keep track of the topup
      uint64_t timestamp = now();
      topups.emplace(get_self(), [&](auto &item) {
        item.id = topups.available_primary_key();;
        item.created_timestamp = timestamp;
        item.carmelusd = carmelusd;
        item.usdeos = usdeos;
        item.carmel = credits;
        item.account = from;
        item.eos = quantity.amount;
      });

      // Transfer the Carmel tokens
      action(
          permission_level{get_self(), "active"_n},
          CARMEL_TOK,
          "transfer"_n,
          std::make_tuple(get_self(), from, asset(credits, CARMEL_SYMBOL), string("new topup"))
       ).send();

      // Update the token price
      settings_index settings(get_self(), get_self().value);
      auto settings_index = settings.get_index<"keyidx"_n>();
      auto carmelusd_setting = settings_index.find("carmelusd"_n.value);
      settings_index.modify(carmelusd_setting, get_self(), [&](auto &item) {
        item.modified_timestamp = timestamp;
        item.value = to_string(carmelusd - 10);
      });
    }

    [[eosio::on_notify("carmeltokens::transfer")]]
    void system::newpayment(name from, name to, asset quantity, string memo) {
      if (to != CARMEL_SYS || from == CARMEL_TOK) {
          return;
      }

      check(quantity.symbol == CARMEL_SYMBOL, "Invalid currency");

      size_t sep_0 = memo.find(':');
      size_t sep_1 = memo.find(':', sep_0 + 1);

      check(sep_0 < 256, "Invalid purchase, missing plan");
      check(sep_1 < 256, "Invalid purchase, missing seats");

      auto username = memo.substr(0, sep_0);
      auto plan = memo.substr(sep_0 + 1, sep_1 - sep_0 - 1);
      auto seats = memo.substr(sep_1 + 1, memo.size() - 1);

      auto seats_pos = seats.find_first_not_of("0123456789");
      check (seats_pos > 0, "Invalid purchase, seats is not a number");

      users_index users(get_self(), get_self().value);
      payments_index payments(get_self(), get_self().value);

      // Ensure the user and plan exist
      auto u = getuser(&users, name{username}, true);
      auto p = getplan(name{plan});

      // Calculate period
      uint64_t timestamp = now();
      uint64_t plan_expire_timestamp = timestamp + (CARMEL_DAY * p->duration);
      if (p->duration == 0) {
          plan_expire_timestamp = timestamp + CARMEL_FOREVER;
      }
      int plan_seats_available = stoi(seats) - 1;

      double carmelusd = stol(getsetting("carmelusd"_n));
      double required_tokens = ((p->price) * stoi(seats) * carmelusd) / 10000;
      double creditshare = stol(getsetting("creditshare"_n));

      check (stoi(seats) >= p->min_seats, "Invalid purchase, too few seats");
      check(quantity.amount == required_tokens, "Wrong amount of tokens");

      long credits = (long)(required_tokens / creditshare);

      // Just edit the user with the right plan 
      (get<0>(u)).modify(get<1>(u), get_self(), [&](auto &item) {
            item.modified_timestamp = timestamp;
            item.plan_id = p->id;
            item.plan_name = p->plan_name;
            item.plan_start_timestamp = timestamp;
            item.plan_expire_timestamp = plan_expire_timestamp;
            item.plan_seats_available = plan_seats_available;
       });

       // Keep track of the payment
       payments.emplace(CARMEL_SYS, [&](auto &item) {
            item.id = payments.available_primary_key();;
            item.created_timestamp = timestamp;
            item.username = name{username};
            item.account = from;
            item.price = required_tokens;
            item.seats = stoi(seats);
            item.plan_name = name{plan};
        });
    }

    /**
     newsetting

     Creates a new Carmel setting.
     Only the system account can perform this action.

     @accessLevel SYS
    */
    void system::addsetting(name account, name key, string value) {
        // Ensure this is a special privilege caller
        check(account == CARMEL_SYS, "Only the system can perform this action");

        // We want to make sure the account owner invokes this
        require_auth(account);

        settings_index settings(get_self(), get_self().value);
      
        // Let's take a look at the plans we have on file
        auto settings_index = settings.get_index<"keyidx"_n>();

        // Look up the requested setting
        auto setting = settings_index.find(key.value);

        uint64_t timestamp = now();
        if(setting == settings_index.end()) {
            // Ready to add the setting
            uint64_t id = settings.available_primary_key();
            settings.emplace(account, [&](auto &item) {
                item.id = id;
                item.created_timestamp = timestamp;
                item.modified_timestamp = timestamp;
                item.key = key;
                item.value = value;
            });
        } else {
             settings_index.modify(setting, get_self(), [&](auto &item) {
                item.modified_timestamp = timestamp;
                item.value = value;
            });
        }
    }

    /**
     newuser

     Creates a new Carmel user, associated with the EOS acccount.
     An EOS account can create multiple Carmel users.
     Any EOS account can perform this action.
     
     @accessLevel USER
    */
    void system::newuser(name account, name username, string fullname, string machine_id, string details) {        
        // We want to make sure the account owner invokes this
        require_auth(account);

        // Take a look at the users
        users_index users(get_self(), get_self().value);

        // Make sure the username is available
        auto u = getuser(&users, username, false);

        // Let's keep track of this user
        uint64_t timestamp = now();
        uint64_t id = users.available_primary_key();
        users.emplace(account, [&](auto &item) {
            item.id = id;
            item.created_timestamp = timestamp;
            item.modified_timestamp = timestamp;
            item.status = "unverified";
            item.account = account;
            item.fullname = fullname;
            item.username = username;
            item.plan_id = 0;
            item.machine_id = machine_id;
            item.plan_name = "free"_n;
            item.plan_start_timestamp = timestamp;
            item.plan_expire_timestamp = timestamp + CARMEL_FOREVER;
            item.plan_seats_available = 0;
            item.details = details;
            item.level = CARMEL_ACCESS_LEVEL_USER;
        });
    }

    /**
     newplan
     
     Adds a new plan. 
     Only the system account can perform this action.

     @accessLevel SYS
    */
    void system::newplan(name account, name plan_name, int duration, long price, int min_seats) {
        // Ensure this is a special privilege caller
        check(account == CARMEL_SYS, "Only the system can perform this action");

        // We want to make sure the account owner invokes this
        require_auth(account);

        plans_index plans(get_self(), get_self().value);
      
        // Ready to add the plan
        uint64_t timestamp = now();
        uint64_t id = plans.available_primary_key();
        plans.emplace(account, [&](auto &item) {
            item.id = id;
            item.created_timestamp = timestamp;
            item.modified_timestamp = timestamp;
            item.plan_name = plan_name;
            item.price = price;
            item.min_seats = min_seats;
            item.duration = duration;
        });
    }

    /**
     newsysadmin
     
     Adds a new sysadmin, provided the user already exists. 
     Only the system account can perform this action.

     @accessLevel SYS
    */
    void system::newsysadmin(name account, name username) {
        // Ensure this is a special privilege caller
        check(account == CARMEL_SYS, "Only the system can perform this action");

        // We want to make sure the account owner invokes this
        require_auth(account);

        // Take a look at the users
        users_index users(get_self(), get_self().value);

        // Make sure the user exists
        auto u = getuser(&users, username, true);

        // Just edit the user with the right permission 
        (get<0>(u)).modify(get<1>(u), get_self(), [&](auto &item) {
            item.modified_timestamp = now();
            item.level = CARMEL_ACCESS_LEVEL_SYSADMIN;
        });
    }

    /**
     newadmin
     
     Adds a new admin, provided the user already exists. 
     Only the system account and sysadmins can perform this action.

     @accessLevel ADMIN
    */
    void system::newadmin(name account, name superadmin, name username) {
        // We want to make sure the account owner invokes this
        require_auth(account);

        // Take a look at the users
        users_index users(get_self(), get_self().value);

        // Make sure the users exist
        auto a = getuser(&users, superadmin, true);
        auto u = getuser(&users, username, true);

        // We have to make sure only sysadmins and up can do this
        check(get<1>(a)->level >= CARMEL_ACCESS_LEVEL_SYSADMIN || account == CARMEL_SYS, "Insufficient access level");

        // Now edit the user with the right permission 
        (get<0>(u)).modify(get<1>(u), get_self(), [&](auto &item) {
            item.modified_timestamp = now();
            item.level = CARMEL_ACCESS_LEVEL_ADMIN;
        });
    }

    /**
     newartifact

     Creates a new Carmel Artifact, associated with the Carmel Author.
     A Carmel User can create multiple Carmel Artifacts.
     Any Carmel User can perform this action.
     
     @accessLevel USER
    */
    void system::newartifact(name account, name author, name artifactname, name type, string details) {
        // We want to make sure the account owner invokes this
        require_auth(account);

        // Take a look at the artifacts and users
        artifacts_index artifacts(get_self(), get_self().value);
        users_index users(get_self(), get_self().value);

        // Make sure the author exists
        auto u = getuser(&users, author, true);

        // Make sure the artifact does not exist
        auto a = getartifact(&artifacts, artifactname, false);

        // Ready to add the artifact
        uint64_t timestamp = now();
        uint64_t id = artifacts.available_primary_key();
        artifacts.emplace(account, [&](auto &item) {
            item.id = id;
            item.created_timestamp = timestamp;
            item.modified_timestamp = timestamp;
            item.status = "unverified";
            item.account = account;
            item.author = author;
            item.details = details;
            item.versions = {};
            item.artifactname = artifactname;
            item.type = type;
        });
    }

    /**
     addartifactv

     Add a new Carmel Artifact version. The Carmel Artifact must exist.
     Any Carmel User can perform this action.
     
     @accessLevel USER
    */    
    void system::addartifactv(name account, name author, name artifactname, string version) {
        // We want to make sure the account owner invokes this
        require_auth(account);

        // Take a look at the artifacts and users
        artifacts_index artifacts(get_self(), get_self().value);
        users_index users(get_self(), get_self().value);

        // Make sure the author exists
        auto u = getuser(&users, author, true);

        // Make sure the artifact exists as well
        auto a = getartifact(&artifacts, artifactname, true);

        // Ready to edit the artifact
        vector<string> versions = (get<1>(a)->versions);
        versions.push_back(version);
        (get<0>(a)).modify(get<1>(a), get_self(), [&](auto &item) {
            item.modified_timestamp = now();
            item.versions = versions;
        });
    }

    /**
     addchallenge

     Lists a new Carmel Challenge, associated with the Carmel Author.
     A related Carmel Bundle must exist, authored by the Carmel Author.
     Any Carmel User can perform this action.
     
     @accessLevel USER
     */
    void system::addchallenge(name account, name author, name bundle, name stack, name name, uint16_t total_tasks, map<string, int> skills, string details) {
        // We want to make sure the account owner invokes this
        require_auth(account);

        // Take a look at the artifacts, challenges and users
        artifacts_index artifacts(get_self(), get_self().value);
        users_index users(get_self(), get_self().value);
        challenges_index challenges(get_self(), get_self().value);

        // Make sure the author exists
        auto u = getuser(&users, author, true);

        // Make sure the artifact exists as well
        auto a = getartifact(&artifacts, bundle, true);

        // Make sure the challenge does not exist
        auto c = getchallenge(&challenges, name, false);

        // Ready to edit the challenge
        uint64_t timestamp = now();
        uint64_t id = challenges.available_primary_key();
        challenges.emplace(account, [&](auto &item) {
            item.id = id;
            item.stack = stack;
            item.created_timestamp = timestamp;
            item.modified_timestamp = timestamp;
            item.status = "unverified";
            item.account = account;
            item.author = author;
            item.bundle = bundle;
            item.skills = skills;
            item.name = name;
            item.versions = {};
            item.total_tasks = total_tasks;
            item.details = details;
        });
    }

    /**
     addchvers

     Adds a new Carmel Challenge version. The Carmel Challenge must exist.
     Any Carmel User can perform this action.
     
     @accessLevel USER
     */
    void system::addchvers(name account, name author, name bundle, name name, string version) {
        // We want to make sure the account owner invokes this
        require_auth(account);

        // Take a look at the artifacts, challenges and users
        users_index users(get_self(), get_self().value);
        challenges_index challenges(get_self(), get_self().value);
        artifacts_index artifacts(get_self(), get_self().value);

        // Make sure the author exists
        auto u = getuser(&users, author, true);

        // Make sure the artifact exists as well
        auto a = getartifact(&artifacts, bundle, true);

        // Make sure the challenge does exist
        auto c = getchallenge(&challenges, name, true);

        // Look at the bundle version
        vector<string> versions = (get<1>(a))->versions;
        auto version_itr = find(versions.begin(), versions.end(), version);
        check (version_itr != versions.end(), "The bundle version does not exist");

        // Ready to edit the challenge
        vector<string> ch_versions = (get<1>(c)->versions);
        auto ch_version_itr = find(ch_versions.begin(), ch_versions.end(), version);
        check (ch_version_itr == ch_versions.end(), "The challenge version already exists");

        ch_versions.push_back(version);
        uint64_t timestamp = now();
        uint64_t id = challenges.available_primary_key();
        (get<0>(c)).modify(get<1>(c), get_self(), [&](auto &item) {
            item.modified_timestamp = now();
            item.versions = ch_versions;
        });
    }

    /**
     addtemplate

     Lists a new Carmel Template, associated with the Carmel Author.
     A related Carmel Bundle must exist, authored by the Carmel Author.
     Any Carmel User can perform this action.
     
     @accessLevel USER
     */
    void system::addtemplate(name account, name author, name bundle, name name, string details) {
        // We want to make sure the account owner invokes this
        require_auth(account);

        // Take a look at the artifacts, templates and users
        artifacts_index artifacts(get_self(), get_self().value);
        users_index users(get_self(), get_self().value);
        templates_index templates(get_self(), get_self().value);

        // Make sure the author exists
        auto u = getuser(&users, author, true);

        // Make sure the artifact exists as well
        auto a = getartifact(&artifacts, bundle, true);

        // Make sure the template does not exist
        auto t = gettemplate(&templates, name, false);

        // Ready to edit the challenge
        uint64_t timestamp = now();
        uint64_t id = templates.available_primary_key();
        templates.emplace(account, [&](auto &item) {
            item.id = id;
            item.created_timestamp = timestamp;
            item.modified_timestamp = timestamp;
            item.status = "unverified";
            item.account = account;
            item.author = author;
            item.bundle = bundle;
            item.name = name;
            item.versions = {};
            item.details = details;
        });
    } 

    /**
     addtemplatev

     Adds a new Carmel Template version. The Carmel Template must exist.
     Any Carmel User can perform this action.
     
     @accessLevel USER
     */
    void system::addtemplatev(name account, name author, name bundle, name name, string version) {
        // We want to make sure the account owner invokes this
        require_auth(account);

         // Take a look at the artifacts, templates and users
        artifacts_index artifacts(get_self(), get_self().value);
        users_index users(get_self(), get_self().value);
        templates_index templates(get_self(), get_self().value);

        // Make sure the author exists
        auto u = getuser(&users, author, true);

        // Make sure the artifact exists as well
        auto a = getartifact(&artifacts, bundle, true);

        // Make sure the template does exist
        auto t = gettemplate(&templates, name, true);

        // Look at the bundle version
        vector<string> versions = (get<1>(a))->versions;
        auto version_itr = find(versions.begin(), versions.end(), version);
        check (version_itr != versions.end(), "The bundle version does not exist");

        // Ready to edit the challenge
        vector<string> t_versions = (get<1>(t)->versions);
        auto t_version_itr = find(t_versions.begin(), t_versions.end(), version);
        check (t_version_itr == t_versions.end(), "The template version already exists");

        t_versions.push_back(version);
        uint64_t timestamp = now();
        uint64_t id = templates.available_primary_key();
        (get<0>(t)).modify(get<1>(t), get_self(), [&](auto &item) {
            item.modified_timestamp = now();
            item.versions = t_versions;
        });
    }      

   /**
     trychallenge

     The user is ready to try a Carmel Challenge.
     Any EOS account can perform this action.
     
     @accessLevel USER
     */
    void system::trychallenge(name account, name user, name challenge_name, string challenge_version, string product_id) {
        require_auth(account);

        users_index users(get_self(), get_self().value);
        auto usernames_idx = users.get_index<"usernameidx"_n>();

        auto username_result = usernames_idx.find(user.value);
        check(username_result != usernames_idx.end(), "The user does not exist");

        challenges_index challenges(get_self(), get_self().value);
        auto challenge_names_idx = challenges.get_index<"nameidx"_n>();
        auto challenge_result = challenge_names_idx.find(challenge_name.value);
        check(challenge_result != challenge_names_idx.end(), "The challenge does not exist");

        progress_index progress(get_self(), account.value);
        auto progress_user_idx = progress.get_index<"usernameidx"_n>();
        auto progress_user_result = progress_user_idx.find(user.value);

        if (progress_user_result != progress_user_idx.end()) {
            while (progress_user_result != progress_user_idx.end())
            {
                if (progress_user_result->challenge_name == challenge_name && 
                    progress_user_result->product_id == product_id) {
                    check(false, "The user has already taken this challenge for this product");
                }
                progress_user_result++;
            }
        } 

        uint64_t now = current_time_point().sec_since_epoch();
        progress.emplace(account, [&](auto &item) {
            item.id = progress.available_primary_key();
            item.challenge_id = challenge_result->id;
            item.challenge_name = challenge_name;
            item.started_timestamp = now;
            item.updated_timestamp = now;
            item.product_id = product_id;
            item.challenge_version = challenge_version;
            item.bundle_name = challenge_result->bundle;
            item.status = "unverified";
            item.task_index = 0;
            item.total_tasks = challenge_result->total_tasks;
            item.account = account;
            item.user = user;
            item.done = false;
        });
    }

    /**
     claimrewards

     The Carmel User claims the rewards they earned, if any.
     Any EOS account can perform this action.
     
     @accessLevel USER
     */
    void system::claimrewards(name account, name user) {
        require_auth(account);

        users_index users(get_self(), get_self().value);
        auto usernames_idx = users.get_index<"usernameidx"_n>();

        auto username_result = usernames_idx.find(user.value);
        check(username_result != usernames_idx.end(), "The user does not exist");
    }

    /**
     addeffort

     The Carmel User adds effort representing work completed for a Carmel Challenge Task.
     Any EOS account can perform this action.
     
     @accessLevel USER
     */
    void system::addeffort(name account, name user, name challenge_name, string challenge_version, string product_id, bool successful, string results) {
        require_auth(account);

        users_index users(get_self(), get_self().value);
        auto usernames_idx = users.get_index<"usernameidx"_n>();

        auto username_result = usernames_idx.find(user.value);
        check(username_result != usernames_idx.end(), "The user does not exist");

        challenges_index challenges(get_self(), get_self().value);
        auto challenge_names_idx = challenges.get_index<"nameidx"_n>();
        auto challenge_result = challenge_names_idx.find(challenge_name.value);
        check(challenge_result != challenge_names_idx.end(), "The challenge does not exist");

        progress_index progress(get_self(), account.value);
        auto progress_user_idx = progress.get_index<"usernameidx"_n>();
        auto progress_user_result = progress_user_idx.find(user.value);

        effort_index effort(get_self(), account.value);
        validations_index validations(get_self(), get_self().value);

        bool found = false;

        if (progress_user_result != progress_user_idx.end()) {
            while (progress_user_result != progress_user_idx.end())
            {
                if (progress_user_result->user == user &&
                    progress_user_result->challenge_name == challenge_name && 
                    progress_user_result->challenge_version == challenge_version && 
                    progress_user_result->product_id == product_id) {
                    check(!progress_user_result->done, "This user already completed this challenge for this products");

                    uint64_t now = current_time_point().sec_since_epoch();
                    bool done = successful && progress_user_result->task_index == progress_user_result->total_tasks - 1;
                    uint16_t index = progress_user_result->task_index;
                    found = true;

                    uint64_t effort_id = effort.available_primary_key();
                    effort.emplace(account, [&](auto &item) {
                        item.id = effort_id;
                        item.created_timestamp = now;
                        item.modified_timestamp = now;
                        item.status = "unverified";
                        item.challenge_id = progress_user_result->challenge_id;
                        item.challenge_name = progress_user_result->challenge_name;
                        item.challenge_version = progress_user_result->challenge_version;
                        item.successful = successful;
                        item.task_index = index;
                        item.verifications = 0;
                        item.account = account;
                        item.user = user;
                        item.results = results;
                    });
                    
                    validations.emplace(account, [&](auto &item) {
                        item.id = validations.available_primary_key();
                        item.effort_id = effort_id;
                        item.created_timestamp = now;
                        item.passes = 0;
                        item.fails = 0;
                        item.expected_success = successful;
                        item.modified_timestamp = now;
                        item.status = "open";
                    });

                    if (successful) { index++; }

                    progress_user_idx.modify(progress_user_result, account, [&](auto &item) {
                        item.updated_timestamp = now;
                        item.task_index = index;
                        item.done = done;
                    });

                    if (done) {
                        usernames_idx.modify(username_result, get_self(), [&](auto &item) {
                            item.modified_timestamp = now;
                            item.skills = addskills(item.skills, challenge_result->skills);
                        });
                    }
                }
                progress_user_result++;
            }
        } 

        if (!found) {
            check(false, "This user is not taking this challenge");
        }
    }  
};