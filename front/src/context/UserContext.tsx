'use client';
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext<any>({} as any);

const UserProvider = ({ children }: any) => {
  const [wallet, setWallet] = useState({
    protocol: process.env.walletProtocol,
    privateKey: process.env.walletPrivateKey,
    publicKey: process.env.walletPublicKey,
    address: process.env.walletAddress,
    xpub: process.env.walletXpub,
    testnet: true,
  });
  useEffect(() => {
    console.log("wallet", wallet);
  }, [wallet]);

  return (
    <UserContext.Provider
      value={{
        wallet,
        setWallet,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
