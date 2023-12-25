"use client";

import React, { createContext, useContext, useState } from "react";

interface CryptoCoin {
  name: string;
  amount: number;
}

interface UserCoinsContextProps {
  userCoins: CryptoCoin[];
  boughtCoins: (name: string, amount: number) => void;
}

const UserCoinsContext = createContext<UserCoinsContextProps | undefined>(
  undefined
);

export const UserCoinsProvider = ({ children }) => {
  const [userCoins, setUserCoins] = useState<CryptoCoin[]>(() => {
    //To load the stored user coins
    const storedCoins = localStorage.getItem("userCoins");

    //Used try catch method for error handling
    try {
      return storedCoins ? JSON.parse(storedCoins) : [];
    } catch (error) {
      console.error("Error parsing stored coins:", error);
      return [];
    }
  });

  const boughtCoins = async (name: string, amount: number) => {
    //Check if the coin with the given name is already in userCoins
    const existingCoin = userCoins.find((coin) => coin.name === name);

    if (existingCoin) {
      //If the coin already exists, then only update the amount
      setUserCoins((prevOwnedCoins) =>
        prevOwnedCoins.map((coin) =>
          coin.name === name ? { ...coin, amount: coin.amount + amount } : coin
        )
      );
    } else {
      //If the coin does not exist then add it to the userCoins array
      setUserCoins((prevOwnedCoins) => [...prevOwnedCoins, { name, amount }]);
    }
    //Save the user coins to localStorage when it changes
    await new Promise((resolve) => {
      localStorage.setItem("userCoins", JSON.stringify(userCoins), resolve);
    });
  };

  const contextValue: UserCoinsContextProps = { userCoins, boughtCoins };

  return (
    <UserCoinsContext.Provider value={contextValue}>
      {children}
    </UserCoinsContext.Provider>
  );
};

export const useUserCoins = () =>
  useContext(UserCoinsContext) as UserCoinsContextProps;
