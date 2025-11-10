import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useState, useEffect } from "react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { toast } from "react-toastify";

export function SolAirdrop() {
  const { connection } = useConnection();
  const wallet = useWallet();
  const [amount, setAmount] = useState("");
  const [balance, setBalance] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchBalance() {
      if (!wallet.publicKey) {
        setBalance(null);
        return;
      }

      try {
        const lamports = await connection.getBalance(wallet.publicKey);
        setBalance(lamports / LAMPORTS_PER_SOL);
      } catch (err) {
        console.error("Failed to fetch balance:", err);
        toast.error("Failed to fetch balance.");
      }
    }

    fetchBalance();
  }, [wallet.publicKey, connection]);

  async function requestAirdrop() {
    try {
      if (!wallet.publicKey) {
        toast.warning("Connect your wallet first.");
        return;
      }

      if (!amount || parseFloat(amount) <= 0) {
        toast.warning("Enter a valid amount.");
        return;
      }

      setLoading(true);
      const lamports = parseFloat(amount) * LAMPORTS_PER_SOL;

      const signature = await connection.requestAirdrop(wallet.publicKey, lamports);
      await connection.confirmTransaction(signature);

      toast.success(`Airdrop successful! Transaction: ${signature}`);

      // Refresh balance after airdrop
      const newBalance = await connection.getBalance(wallet.publicKey);
      setBalance(newBalance / LAMPORTS_PER_SOL);
    } catch (err: any) {
      console.error(err);
      toast.error("Airdrop failed: " + err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-black via-teal-900 to-black text-white p-6">
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-teal-500 w-full max-w-md space-y-6 shadow-lg">
        <h2 className="text-2xl font-bold text-teal-400 text-center">Request Airdrop</h2>

        {wallet.publicKey ? (
          <div className="text-center text-teal-300 mb-4">
            Wallet: {wallet.publicKey.toBase58()} <br />
            Balance: {balance !== null ? balance.toFixed(4) + " SOL" : "Loading..."}
          </div>
        ) : (
          <div className="text-center text-gray-400 mb-4">Connect your wallet to see balance</div>
        )}

        <div className="space-y-4">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount in SOL"
            className="w-full p-3 rounded bg-white/10 text-white placeholder-gray-400 outline-none border border-teal-500 focus:border-cyan-300 transition"
          />

          <button
            onClick={requestAirdrop}
            disabled={loading}
            className={`w-full p-3 rounded font-semibold cursor-pointer transition ${
              loading
                ? "bg-gray-500 text-gray-200 cursor-not-allowed"
                : "bg-teal-500 hover:bg-white text-black"
            }`}
          >
            {loading ? "Requesting..." : "Request Airdrop"}
          </button>
        </div>
      </div>
    </div>
  );
}
