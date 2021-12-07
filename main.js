const SHA256 = require('crypto-js/sha256')

class Block{
    constructor(index,timestamp, data, previousHash=''){
            this.index=index;
            this.timestamp=timestamp;
            this.data=data;
            this.previousHash=previousHash;
            this.hash='ths';
    }
    calculateHash(){
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data).toString);

    }
}

class BlockChain{
    constructor(){
        this.chain=[this.createGenesisBlock];//Genesis Block
    }
     createGenesisBlock(){
         return new Block(0,"01/01/2021", "Genesis block","0");

     }

    getLatestBlock(){
        return this.chain[this.chain.length-1];
    }
    addBlock(newBlock){
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }
      
}
    
let savecoin = new BlockChain();
savecoin.addBlock(new Block(1, "10/12/2021", { amount: 4 }));
savecoin.addBlock(new Block(2, "111/12/2021", { amount: 12 }));
savecoin.addBlock(new Block(3, "13/12/2021", { amount: 3 }));
savecoin.addBlock(new Block(4, "14/12/2021", { amount: 5 }));

console.log(JSON.stringify(savecoin, null, 4));