"use client";
import React from "react";
import Navbar from "./components/navbar";
import { useState } from "react";

interface Coin {
  id: number;
  name: string;
  amount: number;
}

const page = () => {
  const [userCoins, setUserCoins] = useState<Coin[]>([
    { id: 1, name: "Bitcoin", amount: 8 },
    { id: 2, name: "Ethereum", amount: 2 },
  ]);
  const totalCoins = userCoins.reduce((total, coin) => total + coin.amount, 0);
  return (
    <>
      <div className="flex flex-col h-screen">
        <Navbar />

        <main>
          <div className="wrapper flex justify-center w-2/5 mx-auto flex-col">
            <div className="mycrypto flex justify-between gap-10 border-2 border-white rounded-2xl h-28 px-6 py-6">
              <div className="cryptoowned flex flex-col items-center">
                <span>Number of Crypto Coins Type</span>
                <ul className="">
                  {userCoins.map((coin) => (
                    <li key={coin.id}>{coin.amount}</li>
                  ))}
                </ul>
              </div>
              <div className="totalcrypto flex flex-col items-center">
                <span>Total number of Crypto Coins: </span>
                <ul>
                  <li>{ totalCoins }</li>
                </ul>
              </div>
            </div>
            <div className="feed-wrapper mt-10">
              <h1>Crypto Coins</h1>
              <div className="feeds"></div>
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

export default page;
