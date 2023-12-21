"use client";
import React from "react";
import Navbar from "./components/navbar";
import Image from "next/image";
import { useState } from "react";

interface Coin {
  name: string;
  amount: number;
}

const page = () => {
  const [userCoins, setUserCoins] = useState<Coin[]>([
    { name: "Bitcoin", amount: 8 },
    { name: "Ethereum", amount: 2 },
  ]);
  const totalCoins = userCoins.reduce((total, coin) => total + coin.amount, 0);
  return (
    <>
      <div className="flex flex-col bg-main">
        <Navbar />

        <main>
          <div className="wrapper mt-10 flex justify-center w-3/4 mx-auto flex-col">
            <div className="mycrypto flex justify-between gap-10 border-2 border-white rounded-2xl h-28 px-6 py-5">
              <div className="cryptoowned flex flex-col items-center">
                <span className="text-xl font-bold">Number of Crypto Coins Type</span>
                <ul className="mt-3 text-2xl font-bold">
                  {/* {userCoins.map((coin) => (
                    <li key={coin.id}>{coin.amount}</li>
                  ))} */}
                  <li>{userCoins.length}</li>
                </ul>
              </div>
              <div className="totalcrypto flex flex-col items-center">
                <span className="text-xl font-bold">Total number of Crypto Coins </span>
                <ul className="mt-3 text-2xl font-bold">
                  <li>{totalCoins}</li>
                </ul>
              </div>
            </div>
            <div className="feed-wrapper mt-10">
              <h1>Crypto Coins</h1>
              <div className="feeds flex flex-col gap-10 mt-4 mb-4">
                <div className="bitcoin-wrapper flex items-center justify-between border-2 border-white rounded-3xl px-6 py-6">
                  <div className="bitcoin flex items-center gap-4">
                    <Image
                      src="/btc.svg"
                      alt="Bitcoin"
                      width={60}
                      height={60}
                    />
                    <span>Bitcoin</span>
                  </div>
                  <div className="bitcoin-exchange">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                      Exchange
                    </button>
                  </div>
                </div>
                <div className="ethereum-wrapper flex items-center justify-between border-2 border-white rounded-3xl px-6 py-6">
                  <div className="ethereum flex items-center gap-4">
                    <Image
                      src="/eth.svg"
                      alt="Ethereum"
                      width={50}
                      height={20}
                    />
                    <span>Ethereum</span>
                  </div>
                  <div className="ethereum-exchange">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                      Exchange
                    </button>
                  </div>
                </div>
                <div className="doge-wrapper flex items-center justify-between border-2 border-white rounded-3xl px-6 py-6">
                  <div className="doge flex items-center gap-4">
                    <Image
                      src="/doge.svg"
                      alt="Doge Coin"
                      width={60}
                      height={60}
                    />
                    <span>Doge</span>
                  </div>
                  <div className="doge-exchange">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                      Exchange
                    </button>
                  </div>
                </div>
                <div className="shiba-wrapper flex items-center justify-between border-2 border-white rounded-3xl px-6 py-6">
                  <div className="shiba flex items-center gap-4">
                    <Image
                      src="/shiba.svg"
                      alt="Shiba Inu"
                      width={60}
                      height={60}
                    />
                    <span>Shiba Inu</span>
                  </div>
                  <div className="shiba-exchange">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                      Exchange
                    </button>
                  </div>
                </div>
                <div className="bnb-wrapper flex items-center justify-between border-2 border-white rounded-3xl px-6 py-6">
                  <div className="bnb flex items-center gap-4">
                    <Image
                      src="/bnb.svg"
                      alt="BNB Coin"
                      width={60}
                      height={60}
                    />
                    <span>BNB</span>
                  </div>
                  <div className="bnb-exchange">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                      Exchange
                    </button>
                  </div>
                </div>
                <div className="solana-wrapper flex items-center justify-between border-2 border-white rounded-3xl px-6 py-6">
                  <div className="solana flex items-center gap-4">
                    <Image
                      src="/solana.svg"
                      alt="Solana Coin"
                      width={60}
                      height={60}
                    />
                    <span>Solana</span>
                  </div>
                  <div className="solana-exchange">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                      Exchange
                    </button>
                  </div>
                </div>
                <div className="cardano-wrapper flex items-center justify-between border-2 border-white rounded-3xl px-6 py-6">
                  <div className="cardano flex items-center gap-4">
                    <Image
                      src="/cardano.svg"
                      alt="Cardano Coin"
                      width={60}
                      height={60}
                    />
                    <span>Cardano (ADA)</span>
                  </div>
                  <div className="cardano-exchange">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                      Exchange
                    </button>
                  </div>
                </div>
                <div className="tether-wrapper flex items-center justify-between border-2 border-white rounded-3xl px-6 py-6">
                  <div className="tether flex items-center gap-4">
                    <Image
                      src="/tether.svg"
                      alt="Tether Coin"
                      width={60}
                      height={60}
                    />
                    <span>Tether</span>
                  </div>
                  <div className="tether-exchange">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                      Exchange
                    </button>
                  </div>
                </div>
                <div className="usd-wrapper flex items-center justify-between border-2 border-white rounded-3xl px-6 py-6">
                  <div className="usd flex items-center gap-4">
                    <Image
                      src="/usd.svg"
                      alt="USD Coin"
                      width={60}
                      height={60}
                    />
                    <span>USD</span>
                  </div>
                  <div className="usd-exchange">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                      Exchange
                    </button>
                  </div>
                </div>
                <div className="xrp-wrapper flex items-center justify-between border-2 border-white rounded-3xl px-6 py-6">
                  <div className="xrp flex items-center gap-4">
                    <Image
                      src="/xrp.svg"
                      alt="XRP Coin"
                      width={60}
                      height={60}
                    />
                    <span>XRP</span>
                  </div>
                  <div className="xrp-exchange">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                      Exchange
                    </button>
                  </div>
                </div>
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

export default page;
