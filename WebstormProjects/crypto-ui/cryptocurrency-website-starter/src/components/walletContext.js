// import React, { useCallback, useMemo, useState } from 'react';
// import { clusterApiUrl, Connection, LAMPORTS_PER_SOL, Transaction, SystemProgram, PublicKey } from "@solana/web3.js";
// import { WalletAdapterNetwork, WalletNotConnectedError } from "@solana/wallet-adapter-base";
// import {
//     LedgerWalletAdapter,
//     PhantomWalletAdapter,
//     SolflareWalletAdapter,
//     TorusWalletAdapter
// } from "@solana/wallet-adapter-wallets";
// import { ConnectionProvider, useWallet, WalletProvider } from "@solana/wallet-adapter-react";
// import { WalletModalProvider, WalletMultiButton } from "@solana/wallet-adapter-react-ui";
//
// const WalletContext = ({ children }) => {
//     const network = WalletAdapterNetwork.Mainnet;
//     const endpoint = useMemo(() => clusterApiUrl(network), [network]);
//
//     const wallets = useMemo(
//         () => [
//             new LedgerWalletAdapter(),
//             new PhantomWalletAdapter(),
//             new SolflareWalletAdapter({ network }),
//             new TorusWalletAdapter(),
//         ],
//         [network]
//     );
//
//     return (
//         <ConnectionProvider endpoint={endpoint}>
//             <WalletProvider wallets={wallets} autoConnect>
//                 <WalletModalProvider>{children}</WalletModalProvider>
//             </WalletProvider>
//         </ConnectionProvider>
//     );
// };
//
// const Content = () => {
//     const [lamports, setLamports] = useState(0.1);  // Local state for lamports to send
//     const [wallet, setWallet] = useState("9m5kFDqgpf7Ckzbox91RYcADqcmvxW4MmuNvroD5H2r9");  // Local state for the wallet address
//
//     const connection = new Connection(clusterApiUrl("devnet"));
//     const { publicKey, sendTransaction } = useWallet();
//
//     const onClick = useCallback(async () => {
//         if (!publicKey) throw new WalletNotConnectedError();
//
//         // Fetch wallet balance
//         connection.getBalance(publicKey).then((bal) => {
//             console.log(bal / LAMPORTS_PER_SOL);
//         });
//
//         const lamportsToSend = LAMPORTS_PER_SOL * lamports;
//         console.log(publicKey.toBase58());
//         console.log("lamports sending: ", lamportsToSend);
//
//         const transaction = new Transaction().add(
//             SystemProgram.transfer({
//                 fromPubkey: publicKey,
//                 toPubkey: new PublicKey(wallet),
//                 lamports: lamportsToSend,
//             })
//         );
//
//         const signature = await sendTransaction(transaction, connection);
//         await connection.confirmTransaction(signature, 'processed');
//     }, [publicKey, sendTransaction, connection, lamports, wallet]);
//
//     const setTheLamports = (e) => {
//         const value = Number(e.target.value);
//         setLamports(value);
//     };
//
//     const setTheWallet = (e) => {
//         const value = e.target.value;
//         setWallet(value);
//     };
//
//     return (
//         <div className="App">
//             <div className="navbar">
//                 <div className="navbar-inner">
//                     <a id="title" className="brand" href="#">Brand</a>
//                     <ul className="nav"></ul>
//                     <ul className="nav pull-right">
//                         <li><a href="#">White Paper</a></li>
//                         <li className="divider-vertical"></li>
//                         <li><WalletMultiButton /></li>
//                     </ul>
//                 </div>
//             </div>
//
//             <input value={lamports} type="number" onChange={setTheLamports} />
//             <br />
//             <button className="btn" onClick={onClick}>Send Sol</button>
//         </div>
//     );
// };
//
// export default WalletContext;
