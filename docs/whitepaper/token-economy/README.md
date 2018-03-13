## Token Economy

<img align="center" src="https://raw.githubusercontent.com/fluidtrends/carmel/master/images/economy.png">

A significant problem yet to be solved in the learning and development fields, particularly as it applies to software development, is the fact that it is extremely difficult to measure learning progress. Development Managers have a lot of tools available to them to accompany developers on their learning journey but none are accurate predictors of the actual progress being made. The primary challenge is the fact that as knowledge workers, the act of acquiring new technical skills is a fluid and creative process, making it practically impossible to measure as one would measure a purely manual or physical process.

The Carmel Educational Model introduces key principles that make it a viable solution to the growth tracking problem. The micro-learning approach means that the material is smaller and easier to produce and to consume. The peer approach ensures that the content can be produced in a scalable way, as the network increases. And the tokenized challenges allow for fine-grained tracking of progress.

#### Token Value

<img align="left" style="margin: 20px" src="https://raw.githubusercontent.com/fluidtrends/carmel/master/images/tokenvalue-icon.png">

One of the main concerns - if not the primary concern of all - in a blockchain economy is related to the value of the token at the heart of the entire economic model. In Carmel, a token - a Carmel Token - represents a tangible value directly correlated to the learning encapsulated in the challenge at hand. A challenge is authored with the sole purpose of teaching a practical skill. The value of that skill is expressed in units of Carmel Tokens, priced by the original author. The value of the token will change as demand changes but in terms of value correlation, the value of a Carmel Token represents Learning Value.

In essence, each developer in the Carmel community, can measure their skill set in Carmel Tokens. For example, if a Carmel Challenge is priced at 10 Carmel Tokens by the original author, that means that the challenge represents 10 Carmel Tokens worth of learning value. If a developer purchases the challenge and completes it, the value of the developer's skill set is increased by 10 Carmel Tokens.

The value of the token will fluctuate as demand for Carmel Challenges increases. In other words, as developers grow in their skill set by completing more challenges, the more transactions will occur in the Carmel Economy and the higher the value of the Carmel Token will rise. The value of a single Carmel Token is thus directly proportional to the overall value of the network. The more people will learn and draw real value from the platform, the more the token will grow in value as well.

#### Experience Points

Although we're interested in the growth of the Carmel Token, we're faced with a serious pricing problem.

Here's the problem. We want Challenge Authors to set a price for their Challenges because they know best what the learning value of the Challenge is. The community can rate (vote) the Challenge and confirm/unconfirm the value but that's another issue. The question at hand is how does the Author set the price for the Challenge and how does that price change? Does it change?

Here's the scenario:

1. Bob (the Author) creates a Challenge ("Deploy a static site to an AWS S3 bucket")
2. Bob writes the instructions (Tutorial) (a list of steps to follow)
3. Bob writes the validation script (to test that the challenge was completed)
4. Bob adds a difficulty level (Intermediate)
5. Bob adds a category (DevOps)
6. Bob presses publish.

Ideally, we would not want Bob (the Author) do anything more than this. In order to achieve this, what we want, is for the Carmel Platform to automatically figure out the right pricing of the Challenge, in Carmel Tokens. But, without losing sight of the fact that we want to give Bob a way to control the value of the Challenge he authored.

We can do that through **Carmel Experience Points** (Carmel XP).

We can think of Carmel XP as just a **flavor** of Carmel Tokens, but a stable one.

**1 Carmel XP = 1 USD** for the lifetime of the economy.

We also fix a number of Carmel XP to a Challenge Difficulty. Like so:

- Beginner: 5 XP
- Entry: 10 XP
- Intermediate: 15 XP
- Advanced: 20 XP
- Expert: 25 XP

Having all this in place, gives our economy the properties that most interest us. We essentially give authors a pricing range worth between $5 USD and $25 USD for a particular Challenge, so they're in charge of setting the price, by choosing the difficulty. At the same time, we keep the price for a Challenge stable so that it remains fairly priced even if the Carmel Token fluctuates. We want the prices chosen for a Challenge to be as immutable as possible so that different people taking the challenge at different times are charged the same fair price, based on difficulty.

To visualise all this, let's continue the example above and take it one step further. Let's see what happens when someone purchases Bob's Challenge.

Bob's new Challenge, along with the other challenges available are now listed on a Carmel Challenge Board and the price for each Challenge is updated in Real Time based on the value of the Carmel Token.

So for example, let's take a look at the following scenario, with Chris our hero in the lead role this time:

1. Chris finds Bob's Challenge and wants to take it
2. Chris purchases the Challenge at an instance we can call the Time of Purchase instance (TOP).
3. At the TOP instance Chris purchases Bob's Challenge, 1 Carmel Token is worth $3 USD.
4. The price of Bob's challenge at the TOP instance when Chris buys it is 5 Carmel Tokens.
5. Chris confirms the purchase, and 5 Carmel Tokens are transferred from Chris' Carmel Wallet to Bob's Carmel Wallet.
6. Chris can complete the challenge now and upon successful completion, he will be awarded 15 XP.

Another important note about Challenge Authoring is that we although more difficult Challenges are worth more, want Challenge Authors to create a lot more challenges for beginners, like Chris.

In order to incentivise Authors to create Beginner & Junior challenges, authors will have to **unlock the right to create challenges for higher levels**, only after creating a set number of challenges for lower levels.


#### Challenge audits

To ensure **accountability** and **quality**, Challenges are audited and "accepted" (verified) first by other "Verified" Authors. These are valued Carmel Members that are trusted by the Community.

Audits are incentivised by **rewarding 5% of the challenge value to the Auditor**.

In order to publish a challenge, it has to have at least 1 successful audit. If it has more audits, it bubbles up in the **search results** and in the **recommendations** and the system will overall favor better audited challenges.

Developers will also be incentivized to take on more audited challenges because they will award them **more XP based on the number of audits**.

Authors will also be incentivised because **higher audited challenges are more likely to sell**.

Here's a breakdown of XP bonuses:

- 1 audit: no XP bonus
- 2 audits: 5% XP bonus
- 3 audits: 10% XP bonus
- 4 audits: 15% XP bonus
- 5 audits: 20% XP bonus

Challenge Authors can create **Audit Requests** which are broadcast in the Carmel Platform to all those members who have been awarded Auditor Status in the platform. An Audit Request can be answered by an Auditor with an Audit Response.

The Carmel Platform will automatically choose from all Audit Responses the ones that are the likeliest to ensure fairness, based on an algorithm that takes into account several factors, such as how many audits each Auditor has previously completed successfully, if any are currently in progress and based on an overall rating of trust in the platform.