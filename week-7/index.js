// Accounts

// on solana, all data is stored in what are referred to as "accounts". The way data is organized on solana resembles a key-value store, where each entry in the database is called an account.

// ## Key points

// Accounts can store up to 10MB of data, which can consist of either executable program code or program state.
//     Programs (smart contracts) are stateless accounts that store executable code.
//     Data accounts are created by programs to store and manage program state.
// Accounts require a rent deposit in SOL, proportional to the amount of data stored, which is fully refundable when the account is closed.
// when u run solana rent 100 on cli, it gives us the minimum amount that is required to store 100 bytes of data. 

// Every account has a program `owner`. Only the program that owns an account can modify its data or deduct its lamport balance. However, anyone can increase the balance.
// Native programs are built-in programs included with the Solana runtime.

// ## Account

// Each account is identifiable by its unique address, represented as 32 bytes in the format of an [Ed25519](https://ed25519.cr.yp.to/) `PublicKey`. You can think of the address as the unique identifier for the account.

// ## AccountInfo

// Accounts have a [max size of 10MB] and the data stored on every account on Solana has the following structure known as the [AccountInfo]
// AccountInfo structure contains the following fields:
// - `lamports`: The balance of the account in lamports (1 SOL = 1,000,000,000 lamports).
// - `data`: The raw data stored in the account, represented as a byte array.
// - `owner`: The public key of the program that owns the account. Only the owning program can modify the account's data and lamport balance.
// - `executable`: A boolean flag indicating whether the account contains executable code (i.e., a program) or not.
// Even if you store no data, you have to store fields like executable and owner which is why you still have to have a minimum amount of SOL as rent solana rent 0

// ## Example accounts

// - Account with no data (Owner - SystemProgram)
// - Account with some data (Owner - TokenProgram)
// - Program account (Owner - BPF Loader)
    