<h1 class="contract"> create </h1>

Input parameters:

* `issuer` (the author of this contract)
* `maximum_supply` (total available token supply)

### Intent
INTENT. As the author and {{ owner }} of this contract, I {{ signer }} want to create a new token, with a total available supply of {{ maximum_supply }} tokens. Only I {{ signer }}, as the author, {{ issuer }} and {{ owner }}, am allowed to invoke this action.

### Term
TERM. This Contract expires at the conclusion of code execution. The token will then persist on the chain.

<h1 class="contract"> issue </h1>

Input parameters:

* `to` (the account receiving the tokens)
* `quantity` (how many tokens to issue)
* `memo` (a reason for issuing the tokens)

### Intent
INTENT. As the original {{ owner }} and {{ issuer }} of this contract, I {{ signer }} want to mint {{ quantity }} new tokens
and give them to {{ to }} for a reason explained by {{ memo }}. Only I {{ signer }}, as the author, {{ issuer }} and {{ owner }}, am allowed to invoke this action.

### Term
TERM. This Contract expires at the conclusion of code execution. This action changes the token circulating supply.

<h1 class="contract"> retire </h1>

Input parameters:

* `quantity` (how many tokens to retire)
* `memo` (a reason for retiring the tokens)

### Intent
INTENT. As the original {{ owner }} and {{ issuer }} of this contract, I {{ signer }} want to burn {{ quantity }} exiting tokens and remove them from circulation for a reason explained by {{ memo }}. Only I {{ signer }}, as the author, {{ issuer }} and {{ owner }}, am allowed to invoke this action.

### Term
TERM. This Contract expires at the conclusion of code execution. This action changes the token circulating supply.

<h1 class="contract"> transfer </h1>

Input parameters:

* `from` (the account sending the tokens)
* `to` (the account receiving the tokens)
* `quantity` (how many tokens to send)
* `memo` (a reason for sending the tokens)

### Intent
INTENT. As a token holder, I {{ signer }} want to send {{ quantity }} of my own tokens to {{ to }} for a reason explained by {{ memo }}. Only I {{ signer }}, am allowed to transfer my own tokens.

### Term
TERM. This Contract expires at the conclusion of code execution. This action changes the token balances of the sender and receiver accounts.
