// import React, { createContext, useContext, useMemo, useState, useEffect } from 'react';
// import { Connection, PublicKey } from '@solana/web3.js';
// import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
// import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
// import { WalletProvider, useWallet, ConnectionProvider } from '@solana/wallet-adapter-react';
// import { clusterApiUrl } from '@solana/web3.js';
//
// // Create a WalletContext for global access
// const WalletContext = createContext();
//
// export const WalletContextProvider = ({ children }) => {
//     const network = WalletAdapterNetwork.Mainnet;
//     const endpoint = useMemo(() => clusterApiUrl(network), [network]);
//
//     // List of supported wallets, including Phantom
//     const wallets = useMemo(() => [
//         new PhantomWalletAdapter(),
//     ], []);
//
//     return (
//         <ConnectionProvider endpoint={endpoint}>
//             <WalletProvider wallets={wallets} autoConnect>
//                 <WalletContext.Provider value={{}}>
//                     {children}
//                 </WalletContext.Provider>
//             </WalletProvider>
//         </ConnectionProvider>
//     );
// };
//
// // Hook to access wallet
// export const useWalletContext = () => {
//     return useContext(WalletContext);
// };
