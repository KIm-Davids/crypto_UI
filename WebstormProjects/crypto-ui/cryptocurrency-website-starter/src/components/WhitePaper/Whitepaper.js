import React, { useEffect, useState } from "react";
import './Whitepaper.css';  // Assuming you have this file for custom styles

const WhitepaperPage = () => {
    // Generate random position for each circle within a defined viewport
    const generateRandomPosition = () => {
        // Limit the random values to be within the visible range of the page
        return {
            top: `${Math.random() * 80 + 10}vh`, // Between 10% and 90% of the viewport height
            left: `${Math.random() * 80 + 10}vw`, // Between 10% and 90% of the viewport width
            transform: `translate(-50%, -50%)`, // Centering each circle
        };
    };

    // State to hold random positions for the circles
    const [circlePositions, setCirclePositions] = useState([]);

    useEffect(() => {
        // Generate random positions for 10 circles (you can change the number)
        const positions = Array.from({ length: 10 }).map(generateRandomPosition);
        setCirclePositions(positions);
    }, []);

    return (
        <div className="min-h-screen bg-gray-200 relative flex justify-center items-center overflow-hidden">
            {/* Render random circles */}
            {circlePositions.map((position, index) => (
                <div
                    key={index}
                    className="absolute bounce bg-blue-500 w-24 h-24 rounded-full"
                    style={position}
                ></div>
            ))}

            {/* Whitepaper Content Area */}
            <div className="relative z-10 bg-white p-8 rounded-lg shadow-xl w-3/4 max-w-4xl">
                <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">MCGA Token Whitepaper</h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                    MCGA (Make Cryptocurrency Great Again) is a revolutionary new meme token designed to provide fun,
                    rewards, and engagement for the crypto community.
                    With a fixed supply of 10 billion tokens and a unique automatic burn mechanism, we are creating a
                    token that combines humor, community, and real utility. Our aim is to engage the meme-loving
                    community, while providing token holders with rewards and incentivizing long-term involvement.
                    The tokenomics are designed to keep the value growing while maintaining scarcity through automatic
                    burns.
                </p>
                <div className="mt-8">
                    <h2 className="text-2xl font-medium text-gray-700 mb-4">Tokenomics</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        <ul className="list-disc pl-6 space-y-3">
                            <li><strong>Total Supply:</strong> 10 Billion tokens (fixed supply, no additional tokens
                                will be minted).
                            </li>
                            <li><strong>Automatic Burn Mechanism:</strong> 1% of every transaction will be automatically
                                burned, reducing the total supply and increasing scarcity over time. This burn mechanism
                                will continuously support the token’s value by keeping the supply deflationary.
                            </li>
                            <li><strong>Transaction Fees:</strong>
                                <ul className="list-inside list-decimal pl-5 space-y-2">
                                    <li>1% of every transaction is allocated to developers.</li>
                                    <li>1% of every transaction is distributed proportionally to token holders,
                                        rewarding those who hold their tokens in the long term.
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </p>
                </div>
                <div className="mt-8">
                    <h2 className="text-2xl font-medium text-gray-700 mb-4">Allocation of Tokens</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        <ul className="list-disc pl-6 space-y-3">
                            <li><strong>3. Allocation of Tokens</strong></li>
                            <li><strong>Phase 1 - Token Distribution:</strong>
                                <ul className="list-inside list-decimal pl-5 space-y-2">
                                    <li>Phase 1: $0.0045 per token</li>
                                    <li>Phase 2: $0.0065 per token</li>
                                    <li>Phase 3: $0.0085 per token</li>
                                    <li>Phase 4: $0.01 per token</li>
                                </ul>
                            </li>
                            <li><strong>Airdrop:</strong> At the end of the presale, 500,000 tokens will be airdropped
                                to ICO buyers, promoting community engagement and rewarding early supporters.
                            </li>
                            <li><strong>Developer Allocation:</strong> 2 Billion Tokens are reserved for developers to
                                help grow and maintain the project, ensuring ongoing development and innovation.
                            </li>
                            <li><strong>Liquidity Allocation:</strong> 2 Billion Tokens will be allocated to liquidity
                                pools, ensuring smooth trades and market stability.
                            </li>
                        </ul>
                    </p>

                </div>
                <div className="mt-8">
                    <h2 className="text-2xl font-medium text-gray-700 mb-4">RoadMap</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        <ul className="list-disc pl-6 space-y-3">
                            <li><strong>Phase 1:</strong> Token launch and community development.</li>
                            <li><strong>Phase 2:</strong> Listing on decentralized exchanges (DEX), continued community
                                engagement.
                            </li>
                            <li><strong>Phase 3:</strong> Partnerships with meme influencers and content creators to
                                boost visibility.
                            </li>
                            <li><strong>Phase 4:</strong> Integration with meme-related platforms and NFT spaces.</li>
                            <li><strong>Phase 5:</strong> Continued community growth, airdrops, and engagement with new
                                memes.
                            </li>
                        </ul>
                    </p>


                </div>

            </div>
        </div>
    );
};

export default WhitepaperPage;
