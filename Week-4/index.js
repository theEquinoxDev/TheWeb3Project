// ## Solana Jargon, Programming model, Tokens

// Eth/Sol solves for more than just currencies.
// They let us swap native currencies.
// They let the users program anything.
// They also let us create and swap tokens.
// They let us create and deploy smart contracts so we can do many more different things as well. 


// ## Programs/Smart contracts

// ETH was one of the first blockchains to introduce the concept of decentralized state / programs. These are popularly known as smart contracts on the ETH blockchain.
// HTTP Servers are deployed on cloud providers like `GCP, Azure`
// Smart contracts/programs are deployed on the `blockchain`
// Smart contracts in solana are called programs.
// Smart contracts are nothing but backend applications deployed on blockchains. 

// A Simple ETH smart contract

// SPDX-License-Identifier: MIT
// pragma solidity ^0.8.0;

// contract Counter {
//     uint public count;

//     // Constructor to initialize count
//     constructor() {
//         count = 0;
//     }

//     // Function to increment the count
//     function increment() public {
//         count += 1;
//     }

//     // Function to decrement the count
//     function decrement() public {
//         require(count > 0, "Count cannot be negative");
//         count -= 1;
//     }

//     // Function to get the current count
//     function getCount() public view returns (uint) {
//         return count;
//     }
// }

// ## Accounts on Solana

// A. Accounts
// On the Solana blockchain, an "account" is a fundamental data structure used to store various types of information.
// 1. Data Storage: Accounts on Solana are used to store data required by programs (smart contracts) or to maintain state
// 2. Lamports: Accounts hold a balance of Solana’s native cryptocurrency, lamports. Lamports are used to pay for transaction fees and to rent the space that the account occupies on the blockchain.
// 3. Programs:  On Solana, programs are special accounts that contain executable code. These accounts are distinct from regular data accounts in that they are designed to be executed by the blockchain when triggered by a transaction.

// An account can be following: 
// . Account with lamports and data
// . Account with lamports but no data
// . Account with executable code (programs)


// Rent on Solana Blockchain

// It is a mechanism on the Sol blockchain that ensures efficient usage of the resources. It requires accounts to maintain a minimum balance proportional to the amount of data they store on the network. 

// 1. Rent (on-chain storage fee)

// Some blockchains (like Solana) charge a small ongoing fee called “rent” for storing data on-chain.
// It prevents inactive or spam accounts from taking up permanent storage.
// If rent isn’t paid, the account/data can eventually be purged.
/// Rent is refundable. 

// 2. Purpose of Rent
// Blockchain storage is expensive and replicated across many nodes.
// Rent discourages spam and keeps storage usage efficient.

// 3. Rent Exemption Amount
// Instead of paying rent continuously, you can deposit a minimum balance of the native token (e.g., SOL on Solana) into the account.
// This balance makes the account rent-exempt.
// Rent-exempt accounts do not pay rent and will not be deleted, as long as the balance stays above the exemption threshold.

// ##. RPC Basics

// RPC stands for Remote Procedure Call.
// In Web3, it’s a protocol that allows your application (like a web app or script) to communicate with a blockchain node.
// Essentially, it’s like sending a request to the blockchain to read data (like balances or transactions) or write data (like sending a transaction).

// 2. RPC URL
// The RPC URL is the endpoint (web address) of a blockchain node.
// Your Web3 app uses this URL to connect to the blockchain.

// 1. Mainnet
// Definition: The main network of a blockchain where real transactions with real value happen.
// Purpose: This is the “live” blockchain used by everyone.
// Example:
// Ethereum Mainnet (https://mainnet.infura.io/...)
// Bitcoin Mainnet
// Key point: Transactions here cost real money (gas fees).

// 2. Testnet / Devnet
// These are networks used for development and testing. They mimic the mainnet but use fake tokens.

// a) Testnet
// Public network for developers to test smart contracts and apps safely.
// Popular Ethereum testnets:
// Goerli
// Sepolia
// Key point: You can get test Ether for free from faucets; nothing here is “real” money.

// b) Devnet / Localnet
// A private or local blockchain instance for development.
// Example tools:
// Hardhat Network (Ethereum local development)
// Ganache
// Key point: Fast, free, and you control the environment. Great for unit tests and simulations.

// Airdrop: You can drop some solana (not real) for free for deploying an application, etc.


// Web2 Data Model
// In the web2 world, you store data in SQL/NoSQL databases.
// We usually have our databases on cloud platforms like AWS. 
// We just give some queries and the data gets inserted, deleted, whatever we want. 

// Web3 Data Model
// solana stores all the data of the same app / same program in various accounts. 
// In account, we deploy our programs/smart contracts by executable: true . 
// Whenever a new user signs up, they have to create a new account. 
// Taking the example of a Todo app, if we have to create a new todo, then a new account is created every single time. WE can merge them but that's a bad idea, reason is UX. It would be very hard for us to manage the details of the account. So, we just ask for rent (fees) everytime they want to store any data. 