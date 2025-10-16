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
import { SendTokens } from "./components/SendTokens";
import { SignMessage } from "./components/SignMessage";

function App() {
  return(   
  <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/OFFU06fHM9MjGOlG_xkw7"}>
    <WalletProvider wallets={[]} autoConnect>
      <WalletModalProvider>
        <div style={{ display: "flex", justifyContent: "space-evenly", marginTop: "40px", flexDirection: "column", alignItems: "center"}}>
          <br></br>

        <WalletMultiButton/>
        <br></br>
        <WalletDisconnectButton/>
        <br></br>
        <Airdrop />
       
        <ShowBalance/>
        <SendTokens/>
        <br></br>
        <SignMessage/>
        </div>
      </WalletModalProvider>
    </WalletProvider>
  </ConnectionProvider>
  );
}

export default App;
