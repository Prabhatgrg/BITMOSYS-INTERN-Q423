"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import Coins, { CryptoCoin } from "../coins/Coins";
import { getImageByName } from "../coins/Coins";
import { useForceUpdate } from "framer-motion";

interface UserCoinsContextProps {
  userCoins: CryptoCoin[];
  boughtCoins: (name: string, amount: number, image: string) => void;
  exchangeCoins: (sourceCoin: string, targetCoin: string, amount: number, image: string) => void;
}

const UserCoinsContext = createContext<UserCoinsContextProps | undefined>(
  undefined
);

export const UserCoinsProvider = ({ children }) => {
  const [userCoins, setUserCoins] = useState<CryptoCoin[]>(() => {
    //To load the stored user coins
    const storedCoins = window.localStorage.getItem("userCoins");

    //Used try catch method for error handling
    try {
      return storedCoins ? JSON.parse(storedCoins) : [];
    } catch (error) {
      console.error("Error parsing stored coins:", error);
      return [];
    }
  });

  //Save the user coins to localStorage when it changes
  useEffect(() => {
    try {
      window.localStorage.setItem("userCoins", JSON.stringify(userCoins));
    } catch (error) {
      console.error("Error: ", error);
    }
  }, [userCoins]);

  const boughtCoins = async (name: string, amount: number, image: string) => {
    //Check if the coin with the given name is already in userCoins
    const coinExists = userCoins.find((coin) => coin.name === name);
    
    if (coinExists) {
      //If the coin already exists, then only update the amount
      setUserCoins((prevOwnedCoins) =>
        prevOwnedCoins.map((coin) =>
          coin.name === name ? { ...coin, amount: coin.amount + amount } : coin
        )
      );
    } else {
      //If the coin does not exist then add it to the userCoins array
      setUserCoins((prevOwnedCoins) => [...prevOwnedCoins, { name, amount, image } as CryptoCoin]);
    }
  };

  const exchangeCoins = async (sourceCoin: string, targetCoin: string, amount: number, image: string) => {
    const sourceCoinIndex = userCoins.findIndex((coin) => coin.name === targetCoin);
    if(sourceCoinIndex !== -1 && amount > 0){
      const sourceCoinAmount = userCoins[sourceCoinIndex].amount;

      //To check if user have enough coin
      if(sourceCoinAmount >= amount){
        const updatedUserCoins = [...userCoins];

        //To Check if targetCoin is already owned
        const targetCoinIndex = updatedUserCoins.findIndex((coin) => coin.name === targetCoin);
        if(targetCoinIndex !== -1){
          updatedUserCoins[targetCoinIndex] = {
            ...updatedUserCoins[targetCoinIndex],
            amount: updatedUserCoins[targetCoinIndex].amount + amount,
          };
        }
      }
    }
}

  const contextValue: UserCoinsContextProps = { userCoins, boughtCoins, exchangeCoins };

  return (
    <UserCoinsContext.Provider value={contextValue}>
      {children}
    </UserCoinsContext.Provider>
  );
};

export const useUserCoins = () =>
  useContext(UserCoinsContext) as UserCoinsContextProps;
