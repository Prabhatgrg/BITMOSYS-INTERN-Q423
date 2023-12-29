"use client";

import React from "react";
import Navbar from "@/Components/Navbar";
import BuyModal from "@/Components/BuyModal";
import Coins, { CryptoCoin } from "@/coins/Coins";

const Crypto = () => {
  const cryptoCoins: CryptoCoin[] = Coins;
  return (
    <>
      <div className="flex flex-col bg-main h-full text-white">
        <Navbar />

        <main>
          <div className="wrapper flex justify-center sm:w-3/4 lg:w-4/5 mx-auto flex-col">
            <div className="feed-wrapper mt-10">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                Crypto Coins
              </h1>
              <div className="feeds flex flex-col gap-10 mt-4 mb-4">
                {cryptoCoins.map((coin) => (
                  <div
                    key={coin.id}
                    className={`${coin.name.toLowerCase()}-wrapper flex flex-col md:flex-row items-center justify-between border-2 border-white rounded-3xl p-6`}
                  >
                    <div className="flex items-center mb-4 md:mb-0">
                      <img
                        src={`${coin.image}`}
                        alt={coin.name}
                        className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
                      />
                      <span className="ml-2 text-base md:text-lg lg:text-xl">
                        {coin.name}
                      </span>
                    </div>
                    <BuyModal coin={coin} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>

        <footer className="w-full mt-auto flex justify-center py-4">
          <span className="text-sm">&copy; Copyright</span>
        </footer>
      </div>
    </>
  );
};

export default Crypto;
