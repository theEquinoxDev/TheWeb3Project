import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";
import { useState } from "react";
import { toast } from "react-toastify";

export function SolSend() {
  const wallet = useWallet();
  const { connection } = useConnection();
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");

  async function sendTokens() {
    try {
      if (!wallet.publicKey) {
        toast.warning("Wallet not connected."); 
        return;
      }

      if (!to || !amount) {
        toast.warning("Please enter all fields.");
        return;
      }

      const lamports = Math.floor(parseFloat(amount) * LAMPORTS_PER_SOL);

      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: wallet.publicKey,
          toPubkey: new PublicKey(to),
          lamports,
        })
      );

      const signature = await wallet.sendTransaction(transaction, connection);
      toast.success(`Sent ${amount} SOL to ${to}\nTx Signature: ${signature}`); 
    } catch (err: any) {
      console.error(err);
      toast.error("Transaction failed: " + err.message); 
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-black via-teal-900 to-black text-white p-6">
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-teal-500 w-full max-w-md space-y-6 shadow-lg">
        <h2 className="text-2xl font-bold text-teal-400 text-center">
          Send SOL
        </h2>

        <div className="space-y-4">
          <input
            type="text"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            placeholder="Recipient Address"
            className="w-full p-3 rounded bg-white/10 text-white placeholder-gray-400 outline-none border border-teal-500 focus:border-cyan-300 transition"
          />

          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount in SOL"
            className="w-full p-3 rounded bg-white/10 text-white placeholder-gray-400 outline-none border border-teal-500 focus:border-cyan-300 transition"
          />

          <button
            onClick={sendTokens}
            className="w-full bg-teal-500 p-3 rounded hover:bg-white transition text-black font-semibold cursor-pointer"
          >
            Send SOL
          </button>
        </div>
      </div>

  
    </div>
  );
}
