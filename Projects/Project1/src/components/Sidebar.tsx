import { Link } from "react-router-dom";
import {
  BsHouse,
  BsWallet2,
  BsSend,
  BsCurrencyExchange,
  BsLightning,
} from "react-icons/bs";
import { SiEthereum, SiSolana } from "react-icons/si";

export default function Sidebar() {
  const linkClass =
    "flex items-center gap-3 p-3 rounded-xl cursor-pointer transition hover:bg-white/10 text-white/70 hover:text-white";

  return (
    <div className="h-screen w-64 bg-white/10 backdrop-blur-lg text-white p-4 flex flex-col justify-between sticky top-0">
      <div>
        <div className="mb-2">
          <Link to="/" className={linkClass}>
            <BsHouse size={18} />
            Dashboard
          </Link>
        </div>

        <div className="mt-6">
          <div className="text-sm uppercase tracking-wider text-white/50 mb-2 flex items-center gap-2">
            <SiEthereum /> Ethereum
          </div>
          <div className="flex flex-col gap-1">
            <Link to="/eth/wallet" className={linkClass}>
              <BsWallet2 size={16} />
              Wallet Generator
            </Link>
           
            
          </div>
        </div>

        <div className="mt-6">
          <div className="text-sm uppercase tracking-wider text-white/50 mb-2 flex items-center gap-2">
            <SiSolana /> Solana
          </div>
          <div className="flex flex-col gap-1">
            <Link to="/sol/wallet" className={linkClass}>
              <BsWallet2 size={16} />
              Wallet Generator
            </Link>
            <Link to="/sol/send" className={linkClass}>
              <BsSend size={16} />
              Send Solana
            </Link>
            <Link to="/sol/token" className={linkClass}>
              <BsCurrencyExchange size={16} />
              Token Tools
            </Link>
            <Link to="/sol/airdrop" className={linkClass}>
              <BsLightning size={16} />
              Airdrop
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-white/50">
        Built by <span className="text-teal-400 font-semibold">Aditya</span>
      </div>
    </div>
  );
}
