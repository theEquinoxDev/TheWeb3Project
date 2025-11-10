import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { MnemonicProvider } from "./context/MnemonicContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MnemonicProvider>
    <App />
    </MnemonicProvider>
  </StrictMode>
);
