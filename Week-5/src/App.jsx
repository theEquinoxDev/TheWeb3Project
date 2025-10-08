import React, { FC, useMemo } from "react";
import "./App.css";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { UnsafeBurnerWalletAdapter } from "@solana/wallet-adapter-wallets";
import { WalletConnectButton, WalletDisconnectButton, WalletModalProvider, WalletMultiButton,} from "@solana/wallet-adapter-react-ui";
import {clusterApiUrl} from "@solana/web3.js";
import { Airdrop } from "./components/Airdrop";
import { ShowBalance } from "./components/ShowBalance";

import "@solana/wallet-adapter-react-ui/styles.css";

function App() {
  return(   
  <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/OFFU06fHM9MjGOlG_xkw7"}>
    <WalletProvider wallets={[]} autoConnect>
      <WalletModalProvider>
        <WalletMultiButton/>
        <WalletDisconnectButton/>
        <Airdrop />
        <ShowBalance/>
      </WalletModalProvider>
    </WalletProvider>
  </ConnectionProvider>
  );
}

export default App;
