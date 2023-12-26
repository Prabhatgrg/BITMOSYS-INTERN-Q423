import React from "react";

export interface CryptoCoin {
  id: number;
  name: string;
  image: string;
  amount: number;
}

const Coins: CryptoCoin[] = [
  { id: 1, name: "Bitcoin", image: "btc.svg", amount: 10000000 },
  { id: 2, name: "Ethereum", image: "eth.svg", amount: 10000000 },
  { id: 3, name: "Doge", image: "doge.svg", amount: 10000000 },
  { id: 4, name: "Shiba Inu", image: "shiba.svg", amount: 10000000 },
  { id: 5, name: "BNB", image: "bnb.svg", amount: 10000000 },
  { id: 6, name: "Solana", image: "solana.svg", amount: 10000000 },
  { id: 7, name: "Cardano (ADA)", image: "cardano.svg", amount: 10000000 },
  { id: 8, name: "Tether", image: "tether.svg", amount: 10000000 },
  { id: 9, name: "USD", image: "usd.svg", amount: 10000000 },
  { id: 10, name: "XRP", image: "xrp.svg", amount: 10000000 },
];

export default Coins;