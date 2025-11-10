import { createContext, useState, type ReactNode, useContext } from "react";

interface MnemonicContextType {
  mnemonic: string;
  setMnemonic: (mnemonic: string) => void;
}

const MnemonicContext = createContext<MnemonicContextType>({
  mnemonic: "",
  setMnemonic: () => {},
});

export const useMnemonic = () => useContext(MnemonicContext);

export const MnemonicProvider = ({ children }: { children: ReactNode }) => {
  const [mnemonic, setMnemonic] = useState("");
  return (
    <MnemonicContext.Provider value={{ mnemonic, setMnemonic }}>
      {children}
    </MnemonicContext.Provider>
  );
};
