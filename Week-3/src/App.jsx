import { useState } from 'react'
import './App.css'
import { generateMnemonic } from 'bip39'
import { SolanaWallet } from './components/SolanaWallet'
import { EthWallet } from './components/EthWallet'

function App() {
  const [mnemonic, setMnemonic] = useState("")

  const mnemonicFunction = () => {
    const mn = generateMnemonic()
    setMnemonic(mn)
  }

  return (
    <>
      <button onClick={mnemonicFunction}>Create Seed Phrase</button>
      <input type="text" value={mnemonic} readOnly />
      <SolanaWallet mnemonic={mnemonic} />
      <br></br>
      <EthWallet mnemonic={mnemonic} />
    </>
  )
}

export default App
