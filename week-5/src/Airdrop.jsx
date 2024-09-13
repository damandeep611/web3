import { useConnection, useWallet } from "@solana/wallet-adapter-react";

export function Airdrop() {
  const wallet = useWallet();
  const { connection } = useConnection();

  async function sendAirdropToUser() {
    const amount = document.getElementById("publicKey").value;
    await connection.requestAirdrop(wallet.publicKey, amount * 1000000000);
    alert("airdropped sol");
  }
  return (
    <>
      <div className="flex flex-col gap-8 items-center justify-center">
        <h1 className="bg-black text-white w-full text-center p-2">
          Solana web 3
        </h1>
        <div>
          {wallet.publicKey ? (
            <div>HI your wallet Address is : {wallet.publicKey.toString()}</div>
          ) : (
            <div>No Wallet Connected right now</div>
          )}
        </div>
        <div>
          <input
            id="publicKey"
            type="text"
            name=""
            placeholder="Enter Amount"
            className="bg-slate-700 text-white px-10 py-2 "
          />
          <button
            onClick={sendAirdropToUser}
            className="bg-green-700 text-white px-10 py-2 "
          >
            Send Airdrop
          </button>
        </div>
      </div>
    </>
  );
}
