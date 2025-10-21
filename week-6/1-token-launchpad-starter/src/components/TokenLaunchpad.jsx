import {
  getMinimumBalanceForRentExemptMint,
  TOKEN_PROGRAM_ID,
  createInitializeMint2Instruction,
  MINT_SIZE
} from "@solana/spl-token";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
  Connection,
  Keypair,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";

export function TokenLaunchpad() {
  const wallet = useWallet();

  const { connection } = useConnection();

  async function createToken() {
    const name = document.getElementById("name").value;
    const symbol = document.getElementById("symbol").value;
    const imageUrl = document.getElementById("imageUrl").value;
    const initialSupply = document.getElementById("initialSupply").value;

    const lamports = await getMinimumBalanceForRentExemptMint(connection);
    const keypair = Keypair.generate();

    const transaction = new Transaction().add(
      SystemProgram.createAccount({
        fromPubkey: wallet.publicKey,
        newAccountPubkey: keypair.publicKey,
        space: MINT_SIZE,
        lamports,
        programId: TOKEN_PROGRAM_ID,
      }),
      createInitializeMint2Instruction(
        keypair.publicKey,
        6,
        wallet.publicKey,
        wallet.publicKey,
        TOKEN_PROGRAM_ID
      ) // initializes the mint. means it will put the data in the account.
    );

    const recentBlockHash = await connection.getLatestBlockhash();
    transaction.recentBlockhash = recentBlockHash.blockhash; 
    // recentBlockhash - It is a unique identifier for the most recent block in the blockchain. It helps ensure that transactions are processed in a timely manner and prevents replay attacks.replay attacks mean that someone could try to submit the same transaction multiple times to manipulate the system.
    transaction.feePayer = wallet.publicKey;


    transaction.partialSign(keypair);
    wallet.sendTransaction(transaction, connection);
  }

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Solana Token Launchpad</h1>
      <input id="name" className="inputText" type="text" placeholder="Name"></input>{" "}
      <br />
      <input id="symbol"
        className="inputText"
        type="text"
        placeholder="Symbol"
      ></input>{" "}
      <br />
      <input id="imageUrl"
        className="inputText"
        type="text"
        placeholder="Image URL"
      ></input>{" "}
      <br />
      <input id="initialSupply"
        className="inputText"
        type="text"
        placeholder="Initial Supply"
      ></input>{" "}
      <br />
      <button onClick={createToken} className="btn">
        Create a token
      </button>
    </div>
  );
}
