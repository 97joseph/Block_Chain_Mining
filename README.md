# Block_Chain_Mining

Address transactional miner

## Functions

User can create an account by asking for the user's name then give him public and private key using RSA or any other algorithm libraries. By creating the user, each will have a balance by default, the system will make the transaction. If a user wants to make a transaction he must put the public key and the amount, the code must check if the balance is sufficient or not, if the amount is not available in the user account the transaction will fail. I need at least three transactions between users, and check how much I have in my wallet. When doing the transaction the user must include the public key and the amount he wants to send. After doing the transaction, any user can do mining by hash with 4 leading zeros, so there must be a pool for transactions. Mining used for proof of work and validate it.

Functions needed:

1. mining
2. transaction to create a block( block has id, timestamp(date or time), nonce, transaction(data(from, to, amount)), previous hash, hash). Other block is another transaction that is related to previous block by the previous hash.

You can assign Jason for his public key instead of rewriting the public key every time.

This video can be used to explain the idea:https://youtu.be/zVqczFZr124
