import { useState } from "react";
import { mnemonicToSeed } from "bip39";
import { HDNodeWallet, Wallet } from "ethers";
import { useMnemonic } from "../../context/MnemonicContext";
import { toast } from "react-toastify";

export default function EthWallet() {
  const { mnemonic } = useMnemonic();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [addresses, setAddresses] = useState<string[]>([]);

  async function generateEthWallet() {
    if (!mnemonic) {
      toast.warning("Generate a seed phrase first on Dashboard."); 
      return;
    }

    try {
      const seed = await mnemonicToSeed(mnemonic);
      const hdNode = HDNodeWallet.fromSeed(seed);
      const derivationPath = `m/44'/60'/0'/0/${currentIndex}`;
      const child = hdNode.derivePath(derivationPath);
      const wallet = new Wallet(child.privateKey);

      setAddresses((prev) => [...prev, wallet.address]);
      setCurrentIndex((prev) => prev + 1);

      toast.success(`ETH Wallet #${currentIndex + 1} generated!`); 
    } catch (err) {
      console.error("Error generating ETH wallet:", err);
      toast.error("Failed to generate ETH wallet."); 
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-black via-teal-900 to-black text-white p-6">
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-teal-500 w-full max-w-md space-y-6 shadow-lg">
        <h2 className="text-2xl font-bold text-teal-400 text-center">
          Ethereum Wallet Generator
        </h2>

        <button
          onClick={generateEthWallet}
          className="w-full bg-teal-500 p-3 rounded hover:bg-white transition text-black font-semibold cursor-pointer"
        >
          + Generate ETH Wallet
        </button>

        <div className="space-y-2 max-h-60 overflow-y-auto">
          {addresses.length === 0 ? (
            <p className="text-gray-400 text-center">No wallets generated yet</p>
          ) : (
            addresses.map((address, i) => (
              <div
                key={i}
                className="border border-teal-500 rounded-lg p-2 bg-white/5 break-all"
              >
                <span className="text-teal-300">ETH {i + 1}:</span> {address}
              </div>
            ))
          )}
        </div>
      </div>

    </div>
  );
}
