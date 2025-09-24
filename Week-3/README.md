# Wallet Generator App

A **minimalistic, web-based wallet generator** for Solana and Ethereum. This React app allows users to generate a mnemonic (seed phrase) and derive multiple wallets for both Solana and Ethereum networks, all from a single mnemonic.

It’s built with **React**, **Vite**, and uses popular libraries like **bip39**, **ed25519-hd-key**, **tweetnacl**, **@solana/web3.js**, and **ethers**.

---

## Features

- **Mnemonic Generation:** Create a new BIP39 seed phrase easily.
- **Multi-Wallet Derivation:** Generate multiple wallets for both:
  - **Solana:** HD derivation path `m/44'/501'/i'/0'`
  - **Ethereum:** HD derivation path `m/44'/60'/i'/0'`
- **Minimalist UI:** Clean and responsive UI. 
- **Copy-Friendly Addresses:** Wallet addresses are displayed in card-like boxes for easy reading.

---

## Tech Stack

- **Frontend:** React + Vite
- **Blockchain Libraries:**
  - `bip39` – mnemonic generation and seed derivation
  - `ed25519-hd-key` – Solana wallet HD derivation
  - `tweetnacl` – Solana keypair generation
  - `@solana/web3.js` – Solana wallet management
  - `ethers` – Ethereum wallet management

---

## Project Structure

```text
src/
├─ components/
│  ├─ SolanaWallet.jsx
│  └─ EthWallet.jsx
├─ App.jsx
├─ index.css

```
SolanaWallet.jsx – Handles Solana wallet generation.

EthWallet.jsx – Handles Ethereum wallet generation.

App.jsx – Main app component and mnemonic generator.

index.css – Minimalist styling for clean UI. 