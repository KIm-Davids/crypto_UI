// import React from 'react';
// import { useWallet } from '@solana/wallet-adapter-react';
//
// const WalletButton = () => {
//     const { connected, connect, disconnect, publicKey } = useWallet();
//
//     return (
//         <div>
//             {!connected ? (
//                 <button onClick={() => connect()}>Connect Phantom Wallet</button>
//             ) : (
//                 <div>
//                     <p>Connected: {publicKey?.toBase58()}</p>
//                     <button onClick={() => disconnect()}>Disconnect</button>
//                 </div>
//             )}
//         </div>
//     );
// };
//
// export default WalletButton;
