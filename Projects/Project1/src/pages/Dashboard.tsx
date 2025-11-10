import { generateMnemonic } from "bip39";
import { useMnemonic } from "../context/MnemonicContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Dashboard() {
  const { mnemonic, setMnemonic } = useMnemonic();
  const navigate = useNavigate();

  const handleGenerate = () => {
    const mn = generateMnemonic();
    setMnemonic(mn);
    toast.success("Seed phrase generated!"); 
  };

  const handleCopy = () => {
    if (mnemonic) {
      navigator.clipboard.writeText(mnemonic);
      toast.info("Seed phrase copied to clipboard"); 
    }
  };

  return (
    <div className="h-screen flex bg-linear-to-br from-black via-teal-900 to-black">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center text-white space-y-6">
          <p className=" text-red-400 mb-4">Do not share your seed phrase with anyone!</p>

          <button
            onClick={handleGenerate}
            className="bg-teal-500 hover:bg-white text-black font-semibold px-6 py-3 rounded-lg transition cursor-pointer"
          >
            Generate Seed Phrase
          </button>

          {mnemonic && (
            <div className="space-y-4 flex flex-col items-center">
              <div className="bg-white/10 border border-teal-500 rounded-lg p-4 w-3/4 text-center break-all">
                {mnemonic}
              </div>
              <button
                onClick={handleCopy}
                className="bg-teal-500 px-4 py-2 rounded hover:bg-white text-black font-semibold cursor-pointer"
              >
                Copy Seed Phrase
              </button>

              <div className="flex space-x-4 mt-4">
                <button
                  onClick={() => navigate("/eth/wallet")}
                  className="bg-teal-500 px-4 py-2 rounded hover:bg-white text-black font-semibold cursor-pointer"
                >
                  Go to ETH Wallet
                </button>
                <button
                  onClick={() => navigate("/sol/wallet")}
                  className="bg-teal-500 px-4 py-2 rounded hover:bg-white text-black font-semibold cursor-pointer"
                >
                  Go to SOL Wallet
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
    </div>
  );
}
