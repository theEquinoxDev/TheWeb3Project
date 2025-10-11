// # Transactions vs instructions

// When you send a `transaction` to the solana blockchain, you are actually sending a bunch of instructions (with a limit to the max number of instructions you can send)

// Wallet Adapter vs Local Wallet
// Wallet adapter is a library that helps us to connect to different wallets like phantom, backpack, slope etc. It provides a unified interface to interact with these wallets. It also provides a way to sign transactions and messages.

// Local wallet is a wallet that is created and managed by the user. It is not connected to any external wallet. It is usually used for testing purposes.

// const { createMint } = require('@solana/spl-token');
// const mint = await createMint(
//         connection,
//         payer,
//         mintAuthority,
//         null,
//         6,
//         TOKEN_PROGRAM_ID
// );

// We should never store the private key of the user in our database. We should always use the wallet adapter to sign transactions and messages.
// Hence we cannot use the above code to create a token. We have to use the wallet adapter to sign the transaction. Since we want an `end user` to create their own token, pay for gas for creating that token, we need to ask `THEIR WALLET` for approval to create a token. We `CANT` create our own `KeyPair` and create a token using it.
// We need to create a transaction with the instruction to create a token and then ask the user to sign that transaction using their wallet.

// Inspecting the createMint call

// createMint function is a helper function that creates a transaction with the instruction to create a token. We can inspect the code of this function to see how it works.
// The `createMint` function sends a `transaction` with 2 `instructions`

// 1. Create a fresh `mint account`  (a mint account is nothing but a bank account that stores the mint data of a token. )
// 2. Initialise data inside the `mint account` such that it stores `mint data` (decimals, mintAuthority etc)