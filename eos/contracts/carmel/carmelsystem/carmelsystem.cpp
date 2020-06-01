#include "carmelsystem.hpp"

namespace carmel {

    void system::newquest(name author, string uri) {
        require_auth(author);

        quests_index quests(get_self(), get_self().value);
        quests.emplace(author, [&](auto &q) {
            q.id = quests.available_primary_key();
            q.author = author;
            q.status = "pending";
            q.created_on = current_time_point().sec_since_epoch();
            q.uri = uri;
        });
    }

    void system::startquest(name user, uint64_t quest_id) {
        require_auth(user);

        quests_index quests(get_self(), get_self().value);
        auto quest = quests.find(quest_id);  
        eosio::check(quest != quests.end(), "quest not found");

        quests_index user_quests(get_self(), user.value);
        auto user_quest = user_quests.find(quest_id);  
        eosio::check(user_quest == user_quests.end(), "quest already started");

        user_quests.emplace(user, [&](auto &q) {
            q.author = quest->author;
            q.created_on = quest->created_on;
            q.uri = quest->uri;
            q.status = "started";
            q.started_on = current_time_point().sec_since_epoch();
        });
    }

    void system::neweffort(name user, uint64_t quest_id, int8_t challenge_id, int8_t task_id, string message, string status) {       
        require_auth(user);
        
        quests_index quests(get_self(), get_self().value);
        auto quest = quests.find(quest_id);  
        eosio::check(quest != quests.end(), "quest not found");

        quests_index user_quests(get_self(), user.value);
        auto user_quest = user_quests.find(quest_id);  
        eosio::check(user_quest != user_quests.end(), "quest not started yet");

        effort_index effort(get_self(), user.value);
        effort.emplace(user, [&](auto &e) {
            e.id = effort.available_primary_key();
            e.challenge_id = challenge_id;
            e.task_id = task_id;
            e.status = status;
            e.created_on = current_time_point().sec_since_epoch();
            e.message = message;
        });
    }

}