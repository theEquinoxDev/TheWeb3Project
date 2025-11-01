// Coding a Cli based swap. 

const { Connection, Keypair, VersionedTransaction } = require('@solana/web3.js');
const axios = require('axios');
const bs58 = require('bs58');
const {Wallet} = require("@project-serum/anchor");

const connection = new Connection('https://api.mainnet-beta.solana.com');

const wallet = new Wallet(Keypair.fromSecretKey(
    bs58.decode('process.env.PRIVATE_KEY')
));

async function main() {
    const response = await ( await axios.get("https://quote-api.jup.ag/v6/quote?inputMint=So11111111111111111111111111111111111111112&outputMint=Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB&amount=1000000&slippageBps=50"));
    const quoteResponse = response.data;
    console.log(quoteResponse);

    try {
        const response = await (
            await axios.post("https://quote-api.jup.ag/v6/swap", {
                quoteResponse, 
                userPblk: wallet.publicKey.toString(),
            })
        );
        const swapTransaction = response.data.swapTransaction
        console.log("swapTransaction:", swapTransaction);

        
    } catch (error) {
        
    }
    
}