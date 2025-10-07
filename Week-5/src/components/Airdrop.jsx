import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import React from "react";

// the usewallet Hook provides the wallet variable inside the Airdrop component.
// because I wrapped the Airdrop component inside the WalletProvider.

export function Airdrop() {
  const wallet = useWallet();
  const { connection } = useConnection();

  async function sendAirdrop(e) {
    const amount = document.getElementById("publicKey").value
    await connection.requestAirdrop(wallet.publicKey, amount * 1000); // here it wont send 1000 sol. it would send 1000 lamports. which is 10^9 sol. 
    alert("Airdrop Successful!");
  }

  return (
    <div>
      <input id="publicKey" type="text" placeholder="Amount"  />
      <button onClick={sendAirdrop}>Send Airdrop</button>
    </div>
  );
}
