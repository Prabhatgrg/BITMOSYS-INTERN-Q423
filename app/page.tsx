"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import ExchangeModal from "@/components/ExchangeModal";
import { useUserCoins } from "@/context/userCoins";

const Page = () => {
  const { userCoins } = useUserCoins();

  const totalCoins = userCoins.reduce((total, coin) => total + coin.amount, 0);

  return (
    <>
      <div className="flex flex-col bg-main min-h-screen overflow-y-scroll text-white">
        <Navbar />

        <main>
          <div className="wrapper mt-10 flex justify-center sm:w-5/6 md:w-4/5 lg:w-3/4 xl:w-2/3 mx-auto flex-col">
            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-10 border-2 border-white px-6 py-3 rounded-xl">
              <div className="cryptoowned flex flex-col items-center">
                <span className="text-xl font-bold">
                  Number of Crypto Coins Type
                </span>
                <ul className="mt-3 text-2xl font-bold">
                  <li>{userCoins.length}</li>
                </ul>
              </div>
              <div className="totalcrypto flex flex-col items-center mt-5 sm:mt-0">
                <span className="text-xl font-bold">
                  Total number of Crypto Coins
                </span>
                <ul className="mt-3 text-2xl font-bold">
                  <li>{totalCoins}</li>
                </ul>
              </div>
            </div>
            <div className="feed-wrapper mt-10">
              <h1 className="font-bold text-lg">Your Cryptos</h1>
              <div className="feeds flex flex-col gap-10 mt-4 mb-4">
                {userCoins.length > 0 ? (
                  userCoins.map((coin) => (
                    <div
                      key={coin.id}
                      className={`${coin.name.toLowerCase()}-wrapper flex flex-col sm:flex-row items-center justify-between gap-4 border-2 border-white rounded-3xl px-6 py-6`}
                    >
                      <div className="crypto-info flex items-center gap-4">
                        <img
                          src={`${coin.image}`}
                          alt={coin.name}
                          width={25}
                        />
                        <span>{coin.name}</span>
                        <span>Owned: {coin.amount}</span>
                      </div>
                      <ExchangeModal coin={coin}/>
                    </div>
                  ))
                ) : (
                  <div className="flex items-center justify-center">
                    <h1>You have 0 Coins</h1>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>

        <footer className="w-full mt-auto flex justify-center">
          <span>CryptoHub 2023 &#169; copyright</span>
        </footer>
      </div>
    </>
  );
};

export default Page;
