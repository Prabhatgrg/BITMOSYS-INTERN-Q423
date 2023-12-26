import React from "react";

export interface CryptoCoin {
  id: number;
  name: string;
  image: string;
  amount: number;
}

const Coins: CryptoCoin[] = [
  { id: 1, name: "Bitcoin", image: "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=029", amount: 10000000 },
  { id: 2, name: "Ethereum", image: "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=029", amount: 10000000 },
  { id: 3, name: "Doge", image: "https://cryptologos.cc/logos/dogecoin-doge-logo.png?v=029", amount: 10000000 },
  { id: 4, name: "Shiba Inu", image: "https://cryptologos.cc/logos/shiba-inu-shib-logo.png?v=029", amount: 10000000 },
  { id: 5, name: "BNB", image: "https://cryptologos.cc/logos/bnb-bnb-logo.png?v=029", amount: 10000000 },
  { id: 6, name: "Solana", image: "https://cryptologos.cc/logos/solana-sol-logo.png?v=029", amount: 10000000 },
  { id: 7, name: "Cardano (ADA)", image: "https://cryptologos.cc/logos/cardano-ada-logo.png?v=029", amount: 10000000 },
  { id: 8, name: "Tether", image: "https://cryptologos.cc/logos/tether-usdt-logo.png?v=029", amount: 10000000 },
  { id: 9, name: "USD", image: "https://cryptologos.cc/logos/usd-coin-usdc-logo.png?v=029", amount: 10000000 },
  { id: 10, name: "XRP", image: "https://cryptologos.cc/logos/xrp-xrp-logo.png?v=029", amount: 10000000 },
];

export default Coins;