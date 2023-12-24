'use client'

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import BuyModal from "../components/BuyModel";
import { useUserCoins } from "../context/userCoins";

const cryptoCoins = [
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

const Crypto = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCoin, setSelectedCoin] = useState<string | null>(null);

  const handleBuyClick = (coinName: string) => {
    setSelectedCoin(coinName);
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCoin(null);
  }

  const handleBuy = (amount: string) => {
    console.log(`Bought ${selectedCoin} of amount ${amount}`);

    // To close the modal after buying coin
    handleCloseModal();
  }

  return (
    <>
      <div className="flex flex-col h-screen">
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
                        width={coin.name === 'Ethereum' ? 50 : 60}
                        height={coin.name === 'Ethereum' ? 20 : 60}
                      />
                      <span>{coin.name}</span>
                    </div>
                    <div className={`${coin.name.toLowerCase()}-buy`}>
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded-full" onClick={() => handleBuyClick(coin.name)}>
                        Buy
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>

        {/* <main>
          <div className="wrapper flex justify-center w-2/5 mx-auto flex-col">
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
                  <div className="bitcoin-buy">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded-full">
                      Buy
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
                  <div className="ethereum-buy">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded-full">
                      Buy
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
                  <div className="doge-buy">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded-full">
                      Buy
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
                  <div className="shiba-buy">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded-full">
                      Buy
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
                  <div className="bnb-buy">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded-full">
                      Buy
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
                  <div className="solana-buy">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded-full">
                      Buy
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
                  <div className="cardano-buy">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded-full">
                      Buy
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
                  <div className="tether-buy">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded-full">
                      Buy
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
                  <div className="usd-buy">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded-full">
                      Buy
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
                  <div className="xrp-buy">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded-full">
                      Buy
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main> */}

        <footer className="w-full mt-auto flex justify-center">
          <span>&#169; copyright</span>
        </footer>
      </div>

      <BuyModal 
        coinName={selectedCoin || ''}
        showModal={showModal}
        onClose={handleCloseModal}
        onBuy={handleBuy}
      />
    </>
  );
};

export default Crypto;
