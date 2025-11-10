import { useState } from "react";
import { useMnemonic } from "../../context/MnemonicContext";
import { mnemonicToSeed } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl";
import {toast } from "react-toastify";

export default function SolWallet() {
  const { mnemonic } = useMnemonic();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [publicKeys, setPublicKeys] = useState<string[]>([]);

  async function addSolWallet() {
    if (!mnemonic) {
      toast.warning("Generate a seed phrase first on Dashboard."); 
      return;
    }

    try {
      const seed = await mnemonicToSeed(mnemonic);
      const path = `m/44'/501'/${currentIndex}'/0'`;
      const derivedSeed = derivePath(path, Buffer.from(seed).toString("hex")).key;
      const keypair = Keypair.fromSecretKey(
        nacl.sign.keyPair.fromSeed(derivedSeed).secretKey
      );

      setPublicKeys((prev) => [...prev, keypair.publicKey.toBase58()]);
      setCurrentIndex((prev) => prev + 1);

      toast.success(`SOL Wallet #${currentIndex + 1} generated!`); 
    } catch (err) {
      console.error("Error generating SOL wallet:", err);
      toast.error("Error generating SOL wallet."); 
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-black via-teal-900 to-black text-white p-6">
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-teal-500 w-full max-w-md space-y-6 shadow-lg">
        <h2 className="text-2xl font-bold text-teal-400 text-center">
          Solana Wallet Generator
        </h2>

        <button
          onClick={addSolWallet}
          className="w-full bg-teal-500 p-3 rounded hover:bg-white transition text-black font-semibold cursor-pointer"
        >
          + Generate Sol Wallet
        </button>

        <div className="space-y-2 max-h-60 overflow-y-auto">
          {publicKeys.length === 0 ? (
            <p className="text-gray-400 text-center">No wallets generated yet</p>
          ) : (
            publicKeys.map((address, i) => (
              <div
                key={i}
                className="border border-teal-500 rounded-lg p-2 bg-white/5 break-all"
              >
                <span className="text-teal-300">SOL {i + 1}:</span> {address}
              </div>
            ))
          )}
        </div>
      </div>

    </div>
  );
}
