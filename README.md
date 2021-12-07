# Block_Chain_Mining

Address transactional miner

## Functions

User can create an account by asking for the user's name then give him public and private key using RSA or any other algorithm libraries. By creating the user, each will have a balance by default, the system will make the transaction. If a user wants to make a transaction he must put the public key and the amount, the code must check if the balance is sufficient or not, if the amount is not available in the user account the transaction will fail. I need at least three transactions between users, and check how much I have in my wallet. When doing the transaction the user must include the public key and the amount he wants to send. After doing the transaction, any user can do mining by hash with 4 leading zeros, so there must be a pool for transactions. Mining used for proof of work and validate it.

Functions needed:

1. mining
2. transaction to create a block( block has id, timestamp(date or time), nonce, transaction(data(from, to, amount)), previous hash, hash). Other block is another transaction that is related to previous block by the previous hash.

You can assign Jason for his public key instead of rewriting the public key every time.

This video can be used to explain the idea:https://youtu.be/zVqczFZr124

OUTPUT

Process 

1.Install all the Required modules form crypto.js

2.Run the program through a node main method call

S E:\DevPost\Block_Chain_Mining> node main.js
{
"chain": [
null,
{
"index": 1,
"timestamp": "10/12/2021",
"data": {
"amount": 4
},
"hash": {
"words": [
-306148569,
-181173383,
420014670,
-1894584828,
-831131948,
1228692782,
169579189,
1577739247
],
"sigBytes": 32
}
},
{
"index": 2,
"timestamp": "111/12/2021",
"data": {
"amount": 12
},
"previousHash": {
"words": [
-306148569,
-181173383,
420014670,
-1894584828,
-831131948,
1228692782,
169579189,
1577739247
],
"sigBytes": 32
},
"hash": {
"words": [
1886601653,
-1428224862,
799324659,
1589270031,
-287892669,
-1149696329,
-722186856,
-2094187936
],
"sigBytes": 32
}
},
{
"index": 3,
"timestamp": "13/12/2021",
"data": {
"amount": 3
},
"previousHash": {
"words": [
1886601653,
-1428224862,
799324659,
1589270031,
-287892669,
-1149696329,
-722186856,
-2094187936
],
"sigBytes": 32
},
"hash": {
"words": [
-1120783319,
-1656262919,
-1453984242,
987077984,
-805803515,
788329691,
344180105,
-588293704
],
"sigBytes": 32
}
},
{
"index": 4,
"timestamp": "14/12/2021",
"data": {
"amount": 5
},
"previousHash": {
"words": [
-1120783319,
-1656262919,
-1453984242,
987077984,
-805803515,
788329691,
344180105,
-588293704
],
"sigBytes": 32
},
"hash": {
"words": [
-1788781036,
-2031517223,
-798388804,
1231332765,
443767577,
-1757376483,
577017885,
-1895230573
],
"sigBytes": 32
}
}
]
}
