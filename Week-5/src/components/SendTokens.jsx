import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";



export function SendTokens() {
    const wallet = useWallet();
    const { connection } = useConnection();

    async function sendTokens() {
        const to = document.getElementById("to").value;
        const amount = document.getElementById("amount").value;
        if(!to || !amount) {
            return alert("Enter all fields");
        }
        const transaction = new Transaction()
        transaction.add(SystemProgram.transfer({
            fromPubkey: wallet.publicKey,
            toPubkey: new PublicKey(to),
            lamports: amount * LAMPORTS_PER_SOL, // convert sol to lamports
        }));
        
        await wallet.sendTransaction(transaction, connection);
        alert("Sent" + amount + "SOL to " + to);
    }
  return (
    <div>
        <input type="text" id="to" placeholder="To" />
        <input type="text" id="amount" placeholder="Amount" />
        <button onClick={sendTokens}>Send</button>
    </div>
  )
}   