// ## Solana Jargon, Programming model, Tokens

// Eth/Sol solves for more than just currencies.
// They let us swap native currencies.
// They let the users program anything.
// They also let us create and swap tokens.
// They let us create smart contracts.

// ## Programs/Smart contracts

// ETH was one of the first blockchains to introduce the concept of decentralized state / programs. These are popularly known as smart contracts on the ETH blockchain.
// HTTP Servers are deployed on cloud providers like `GCP, Azure`
// Smart contracts/programs are deployed on the `blockchain`
// Smart contracts in solana are called programs.

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
