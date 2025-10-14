// Transfer lamports from your account to another account

const { Keypair, Connection, SystemProgram, Transaction } = require('@solana/web3.js');

const payer = Keypair.fromSecretKey(Uint8Array.from([119,95,195,241,112,192,170,174,60,134,92,203,24,146,194,54,67,214,173,97,202,238,103,186,69,37,25,25,32,210,20,91,163,15,5,103,75,37,249,121,55,186,38,112,202,60,95,37,206,83,95,150,78,250,126,119,223,98,136,34,189,157,30,4]));

const connection = new Connection("https://api.devnet.solana.com");
async function main() {
    const newAccount = Keypair.generate();
    const transaction = new Transaction();
    transaction.add(
        SystemProgram.transfer({
            fromPubkey: payer.publicKey,
            toPubkey: newAccount.publicKey,
            lamports: 0.01 * 1000000000,
        }),
    );

    await connection.sendTransaction(transaction, [payer]);
    console.log(`Transferred to  ${newAccount.publicKey.toBase58()}`);
}

main();

