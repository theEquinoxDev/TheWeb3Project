import "./App.css";
import { TokenLaunchpad } from "./components/TokenLaunchpad";
import  {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletDisconnectButton, WalletModalProvider, WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import '@solana/wallet-adapter-react-ui/styles.css'

function App() {
  return (
    <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/OFFU06fHM9MjGOlG_xkw7"}> 
    {/* the endpoint is the rpc url where we will be sending all our requests */}
      <WalletProvider wallets={[]} autoConnect>
        {/*  wallets is empty because most wallets like backpack, phantom, They follow wallet standard which automatically detects them. in future, if something is created, then we have to explicitly declare them here.  */}
        <WalletModalProvider >
             <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: 20
              }}>
                
          <WalletMultiButton/>
          <WalletDisconnectButton/>
          </div>
          <TokenLaunchpad></TokenLaunchpad>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
