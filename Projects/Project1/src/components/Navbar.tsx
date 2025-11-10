import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export default function Navbar() {
  return (
    <div className="w-full flex items-center justify-between p-4 bg-white/20 backdrop-blur-md rounded-b-3xl text-white sticky top-0 z-10">
      <div className="font-bold text-xl text-teal-500">ZeroX</div>

      <div className="flex items-center gap-3">
        <WalletMultiButton />
        
      </div>
    </div>
  );
}
