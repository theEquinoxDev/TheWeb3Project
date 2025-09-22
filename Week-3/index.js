// Creating a Web based Wallet

// Solana public key has 32 bytes length. 
// Ethereum public address has 20 bytes length. (derived from the public key)

// When generating the public key for an ETH address: 

// . Initially, a public key is generated using elliptic curve cryptography. 
// . The public key is then hashed using the Keccak-256 algorithm. 
// . After hashing the public key with Keccak-256, you got a 32-byte hash. The Ethereum address is derived from this hash by taking only the last 20 bytes of the hash output. 
// . The resulting 20 byte value is then converted into hex format and prefixed with '0x' to form the Ethereum address. 

