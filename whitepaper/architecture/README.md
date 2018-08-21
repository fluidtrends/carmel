Carmel is designed from scratch to be decentralized, flexible, highly scalable, low maintenance and easy to use. The backend of the platform is a hybrid blockchain-cloud for performance reasons. As much as a blockchain-only architecture would be ideal, for the amount of transactional power Carmel requires, there is no available blockchain that can support those needs yet. The architecture is designed to be flexible so that as such a blockchain becomes production ready, Carmel can be transitioned to that infrastructure exclusively. Until that phase, the backend will incorporate a serverless cloud that will allow fast on-demand computation and will scale as needed.

#### Blockchain App

<img align="left" style="margin: 20px" src="https://raw.githubusercontent.com/fluidtrends/carmel/master/images/blockchain-icon.png">

Carmel makes use of the EOS blockchain as its primary infrastructure. EOS is a new concept and ambitious enough to warrant a deep dive into its capabilities but as good as EOS sounds, until it hits a production grade milestone, Carmel will base only some parts of its own architecture on it. The transactional aspect of Carmel, the purchasing of Carmel Challenges, will live exclusively on EOS from the start. The Carmel EOS Blockchain App will provide a public record of all Carmel Transactions which will also act as a public continuous learning journey. Every purchase of a Carmel Challenge will be tracked in the Carmel EOS App but also every result of the learning experience, whether successful or not, as evidenced and validated by the validation code associated with each Carmel Challenge. Other aspects of EOS, such as storing, will be explored in time, as alternatives to the initial cloud-based Carmel architecture.

#### Private Cloud

<img align="left" style="margin: 20px" src="https://raw.githubusercontent.com/fluidtrends/carmel/master/images/cloud-icon.png">

In order to ensure a high transactional throughput, Carmel will include a private Cloud component based on AWS Lambda and Firebase as a means to ensure a real-time, on-demand, always-on backend, available without any interruptions. The Carmel Cloud will communicate with the Carmel EOS App as needed to poll transaction history but it will not create new transactions as those will only happen from a secure client app. The Carmel Cloud is responsible for Carmel Account Management such as authentication, via Firebase. As the EOS blockchain improves, Carmel will transition to EOS accounts as that phase nears maturity. The Carmel Cloud will also handle all storing, retrieving and publishing of Carmel Challenges as well as all community needs such as conversations between members. These too can be transitioned to EOS, especially storage, once EOS matures.

#### Web App

<img align="left" style="margin: 20px" src="https://raw.githubusercontent.com/fluidtrends/carmel/master/images/web-icon.png">

The Carmel Web App lives at carmel.io and acts as the primary interface to the Carmel Cloud for members and visitors. This is where a visitor can join the community by creating a new Carmel Account and this is where a Carmel Author comes to create a new Carmel Challenge and eventually publish it as well. The Carmel Web App is also the central hub for displaying information about the progress of each member's learning journey. Each member gets a personalized story page that can be accessed by anyone on the internet, without logging in to Carmel. Each member's learning story will be accessible at ```carmel.io/<username>``` and will be updated automatically as the member creates and completes more challenges.

#### Desktop App

<img align="left" style="margin: 20px" src="https://raw.githubusercontent.com/fluidtrends/carmel/master/images/desktop-icon.png">

If there's one important aspect of what's missing from the Carmel Cloud and the Carmel Web App, that's the ability to create new transactions. Such as purchasing a new Carmel Challenge. The reason for that is because creating a new transaction requires a private key that cannot be stored on the Carmel Cloud or the Carmel Web App for security reasons. And so, Carmel members will be able to download the Carmel Desktop App on their mac, windows or linux computers and will be provided with a secure, encrypted environment, perfect for performing secure blockchain transactions. The Carmel Desktop App will be password protected and it will lock after a few minutes of inactivity so that even if the computer is compromised, without the password, the private blockchain key will not be compromised. The Carmel Desktop App includes the Carmel Wallet and so that is going to be the primary and the recommended way of purchasing new Carmel Tokens.

#### Mobile App

<img align="left" style="margin: 20px" src="https://raw.githubusercontent.com/fluidtrends/carmel/master/images/mobile-icon.png">

Carmel Developers can access their Carmel Account via a native mobile app, available for iOS and Android devices. The app is in complete sync with the Carmel Cloud and it can perform most of the operations of the Web App but instead of catering to publishing, the mobile focuses on smaller parts of the overall experiences, such as notifications and community communication, such as messaging. The mobile app is synchronized in real-time with the web app and with the cloud such that any operation on either web or mobile is visible on both platforms immediately. In practice, developers use the mobile app to stay in the loop with community activity and communicate with peers, and use the web for publishing new challenges.
