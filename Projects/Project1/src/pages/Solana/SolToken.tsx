import {
  getMinimumBalanceForRentExemptMint,
  TOKEN_PROGRAM_ID,
  createInitializeMint2Instruction,
  MINT_SIZE,
  getAssociatedTokenAddress,
  createAssociatedTokenAccountInstruction,
  createMintToInstruction,
} from "@solana/spl-token";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Keypair, SystemProgram, Transaction } from "@solana/web3.js";
import { useState } from "react";
import { toast } from "react-toastify";

export function SolToken() {
  const wallet = useWallet();
  const { connection } = useConnection();

  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [supply, setSupply] = useState("");
  const [mintAddress, setMintAddress] = useState("");
  const [loading, setLoading] = useState(false);

  async function createToken() {
    try {
      if (!wallet.publicKey) {
        toast.warning("Wallet not connected.");
        return;
      }

      setLoading(true);

      const initialSupply = Number(supply);
      if (isNaN(initialSupply) || initialSupply < 0) {
        toast.warning("Please enter a valid initial supply"); 
        setLoading(false);
        return;
      }

      const mintKeypair = Keypair.generate();
      const lamports = await getMinimumBalanceForRentExemptMint(connection);

      const transaction = new Transaction().add(
        SystemProgram.createAccount({
          fromPubkey: wallet.publicKey,
          newAccountPubkey: mintKeypair.publicKey,
          space: MINT_SIZE,
          lamports,
          programId: TOKEN_PROGRAM_ID,
        }),
        createInitializeMint2Instruction(
          mintKeypair.publicKey,
          6,
          wallet.publicKey,
          wallet.publicKey,
          TOKEN_PROGRAM_ID
        )
      );

      transaction.feePayer = wallet.publicKey;
      const { blockhash } = await connection.getLatestBlockhash();
      transaction.recentBlockhash = blockhash;
      transaction.partialSign(mintKeypair);

      await wallet.sendTransaction(transaction, connection);

      setMintAddress(mintKeypair.publicKey.toBase58());

      if (initialSupply > 0) {
        const userTokenAccount = await getAssociatedTokenAddress(
          mintKeypair.publicKey,
          wallet.publicKey
        );

        const mintTx = new Transaction();
        const accountInfo = await connection.getAccountInfo(userTokenAccount);
        if (!accountInfo) {
          mintTx.add(
            createAssociatedTokenAccountInstruction(
              wallet.publicKey,
              userTokenAccount,
              wallet.publicKey,
              mintKeypair.publicKey
            )
          );
        }

        mintTx.add(
          createMintToInstruction(
            mintKeypair.publicKey,
            userTokenAccount,
            wallet.publicKey,
            initialSupply * 10 ** 6
          )
        );

        await wallet.sendTransaction(mintTx, connection);
      }

      toast.success(`Token created successfully: ${name} (${symbol})`); 

      setName("");
      setSymbol("");
      setSupply("");
    } catch (err: any) {
      console.error("Token creation failed:", err);
      toast.error("Token creation failed: " + err.message); 
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-black via-teal-900 to-black text-white p-6">
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-teal-500 w-full max-w-md space-y-6 shadow-lg">
        <h2 className="text-2xl font-bold text-teal-400 text-center">
          Create SPL Token
        </h2>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Token Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 rounded bg-white/10 text-white placeholder-gray-400 outline-none border border-teal-500 focus:border-cyan-300 transition"
          />

          <input
            type="text"
            placeholder="Token Symbol"
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
            className="w-full p-3 rounded bg-white/10 text-white placeholder-gray-400 outline-none border border-teal-500 focus:border-cyan-300 transition"
          />

          <input
            type="number"
            placeholder="Initial Supply"
            value={supply}
            onChange={(e) => setSupply(e.target.value)}
            className="w-full p-3 rounded bg-white/10 text-white placeholder-gray-400 outline-none border border-teal-500 focus:border-cyan-300 transition"
            min="0"
          />

          <button
            onClick={createToken}
            disabled={loading}
            className={`w-full p-3 rounded font-semibold cursor-pointer transition ${
              loading
                ? "bg-gray-500 text-gray-200 cursor-not-allowed"
                : "bg-teal-500 hover:bg-white text-black"
            }`}
          >
            {loading ? "Creating..." : "Create Token"}
          </button>

          {mintAddress && (
            <div className="text-center text-teal-300 mt-4 break-all">
              Mint Address: {mintAddress}
            </div>
          )}
        </div>
      </div>

  
    </div>
  );
}
