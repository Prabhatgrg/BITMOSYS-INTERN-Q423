'use client';

import React from "react";
import Navbar from "../components/Navbar";
import BuyModal from "../components/BuyModal";
import Coins, { CryptoCoin } from "../coins/Coins";

const Crypto = () => {
  const cryptoCoins: CryptoCoin[] = Coins;
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
                      <img
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
