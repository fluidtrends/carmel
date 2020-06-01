<h1 class="contract"> newquest </h1>

Input parameters:

* `author` (the author of this quest)
* `uri` (the Quest URI where Carmel SDK will resolve)

### Intent
INTENT. I {{ signer }} want to create a new quest, with a particular {{ uri }} that specifies where it resolves. 

### Term
TERM. This Contract expires at the conclusion of code execution. The token will then persist on the chain.

<h1 class="contract"> startquest </h1>

Input parameters:

* `user` (the Carmel user that would like to start this quest)
* `quest_id` (the id of the quest to start)

### Intent
INTENT. As a Carmel {{ user }}, I {{ signer }} want to start this {{ quest }} so I can invest effort into developing my skills.

### Term
TERM. This Contract expires at the conclusion of code execution. This action changes the token circulating supply.

<h1 class="contract"> neweffort </h1>

Input parameters:

* `user` (the Carmel user that would like to register new effort)
* `quest_id` (the id of the quest that the user is currently taking)
* `challenge_id` (the id of the challenge scoped within this quest)
* `task_id` (the id of the task scoped within the challenge)
* `message` (a human readable description of the effort)
* `status` (a way for us to categorize this effort)

### Intent
INTENT. As a Carmel {{ user }}, I {{ signer }} want to tell the world that I have recently invested effort in working on task {{ task_id }} of the {{ challenge_id }} challenge within the {{ quest_id }} quest.

### Term
TERM. This Contract expires at the conclusion of code execution. This action changes the token circulating supply.
