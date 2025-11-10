import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import EthWallet from "./pages/Ethereum/EthWallet";
import SolWallet from "./pages/Solana/SolWallet";
import { SolSend } from "./pages/Solana/SolSend";
import { SolAirdrop } from "./pages/Solana/SolAirdrop";
import { SolToken } from "./pages/Solana/SolToken";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import {
  PhantomWalletAdapter
} from "@solana/wallet-adapter-wallets";
import "@solana/wallet-adapter-react-ui/styles.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const endpoint =
    process.env.VITE_SOLANA_RPC || "https://api.devnet.solana.com";
  const wallets = [
    new PhantomWalletAdapter()
  ];

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
      />
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>
            <Router>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/eth/wallet" element={<EthWallet />} />
                <Route path="/sol/wallet" element={<SolWallet />} />
                <Route path="/sol/send" element={<SolSend />} />
                <Route path="/sol/airdrop" element={<SolAirdrop />} />
                <Route path="/sol/token" element={<SolToken />} />
              </Routes>
            </Router>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </>
  );
}

export default App;
