// crypto.tsx
'use client';

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import BuyModal from "../components/BuyModal";
import { useUserCoins } from "../context/userCoins";

interface CryptoCoin {
  id: number;
  name: string;
  image: string;
}

const Crypto = () => {
  const cryptoCoins: CryptoCoin[] = [
    { id: 1, name: "Bitcoin", image: "btc.svg" },
    { id: 2, name: "Ethereum", image: "eth.svg" },
    { id: 3, name: "Doge", image: "doge.svg" },
    { id: 4, name: "Shiba Inu", image: "shiba.svg" },
    { id: 5, name: "BNB", image: "bnb.svg" },
    { id: 6, name: "Solana", image: "solana.svg" },
    { id: 7, name: "Cardano (ADA)", image: "cardano.svg" },
    { id: 8, name: "Tether", image: "tether.svg" },
    { id: 9, name: "USD", image: "usd.svg" },
    { id: 10, name: "XRP", image: "xrp.svg" },
  ];

  // const [selectedCoin, setSelectedCoin] = useState<string | null>(null);

  // const handleBuyClick = (coinName: string) => {
  //   setSelectedCoin(coinName);
  // };

  return (
    <>
      <div className="flex flex-col bg-dark h-full">
        <Navbar />

        <main>
          <div className="wrapper flex justify-center w-2/5 mx-auto flex-col">
            <div className="feed-wrapper mt-10">
              <h1>Crypto Coins</h1>
              <div className="feeds flex flex-col gap-10 mt-4 mb-4">
                {cryptoCoins.map((coin) => (
                  <div
                    key={coin.id}
                    className={`${coin.name.toLowerCase()}-wrapper flex items-center justify-between border-2 border-white rounded-3xl px-6 py-6`}
                  >
                    <div
                      className={`${coin.name.toLowerCase()} flex items-center gap-4`}
                    >
                      <Image
                        src={`/${coin.image}`}
                        alt={coin.name}
                        width={coin.name === "Ethereum" ? 50 : 60}
                        height={coin.name === "Ethereum" ? 20 : 60}
                      />
                      <span>{coin.name}</span>
                    </div>
                    <BuyModal coin={coin} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>

        <footer className="w-full mt-auto flex justify-center">
          <span>&#169; copyright</span>
        </footer>
      </div>
    </>
  );
};

export default Crypto;
