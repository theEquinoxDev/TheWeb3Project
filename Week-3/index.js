// Creating a Web based Wallet

// Solana public key has 32 bytes length. 
// Ethereum public address has 20 bytes length. (derived from the public key)

// When generating the public key for an ETH address: 

// . Initially, a public key is generated using elliptic curve cryptography. 
// . The public key is then hashed using the Keccak-256 algorithm. 
// . After hashing the public key with Keccak-256, you got a 32-byte hash. The Ethereum address is derived from this hash by taking only the last 20 bytes of the hash output. 
// . The resulting 20 byte value is then converted into hex format and prefixed with '0x' to form the Ethereum address. 

// ## Solana
// Solana public keys are 32 bytes (5W4oGgDHqir3KNEcmiMn6tNHmbWjC7PgW11sk4AwWbpe). No need for hashing/chopping


// # RPC, JSON-RPC  
// JSON-RPC is a remote procedure call (RPC) protocol encoded in JSON (JavaScript Object Notation). It allows for communication between a client and a server over a network. JSON-RPC enables a client to invoke methods on a server and receive responses, similar to traditional RPC protocols but using JSON for data formatting.

// As a user, you interact with the blockchain for two purposes - 

// 1. To send a `transction`
// 2. To fetch some details from the blockchain (balances etc)

// Wei:

// - Definition: Wei is the smallest unit of cryptocurrency in the Ethereum network. It's similar to how a cent is to a dollar.
// - Value: 1 Ether (ETH) = 10^18 Wei.

//Gwei

// - Definition: A larger unit of Ether commonly used in the context of gas prices.
// - Conversion: 1 Ether = 10^9 gwei

//  Lamports

// - In the Solana blockchain, the smallest unit of currency is called a lamport. Just as wei is to Ether in Ethereum, lamports are to SOL (the native token of Solana). 
// 1 SOL = 10 ^ 9 Lamports