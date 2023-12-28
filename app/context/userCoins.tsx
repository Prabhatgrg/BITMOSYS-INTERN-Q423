"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { CryptoCoin } from "../coins/Coins";
import Notiflix from "notiflix";

interface UserCoinsContextProps {
  userCoins: CryptoCoin[];
  boughtCoins: (name: string, amount: number, image: string) => void;
  exchangeCoins: (
    sourceCoin: string,
    targetCoin: string,
    amount: number,
    image: string
  ) => void;
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
      setUserCoins((prevOwnedCoins) => [
        ...prevOwnedCoins,
        { name, amount, image } as CryptoCoin,
      ]);
    }
    Notiflix.Report.success("Success", "Coin Bought Successfully", "Close");
  };

  const exchangeCoins = async (
    sourceCoin: string,
    targetCoin: string,
    amount: number,
    image: string
  ) => {
    //To check if the coin is owned by the user
    const sourceCoinIndex = userCoins.findIndex(
      (coin) => coin.name === sourceCoin
    );
    if (sourceCoinIndex !== -1 && amount > 0) {
      const sourceCoinAmount = userCoins[sourceCoinIndex].amount;

      //To prevent from exchanging with the same coin
      if (sourceCoin == targetCoin) {
        Notiflix.Report.failure(
          "Error",
          "Cannot exchange with the same coin",
          "Close"
        );
        // alert("Cannot exchange with the same coin");
        return;
      }

      //To check if user have enough coin
      if (sourceCoinAmount >= amount) {
        const updatedUserCoins = [...userCoins];

        //To Check if targetCoin is already owned
        const targetCoinIndex = updatedUserCoins.findIndex(
          (coin) => coin.name === targetCoin
        );
        if (targetCoinIndex !== -1) {
          updatedUserCoins[targetCoinIndex] = {
            ...updatedUserCoins[targetCoinIndex],
            amount: updatedUserCoins[targetCoinIndex].amount + amount,
          };
        } else {
          updatedUserCoins.push({ name: targetCoin, amount, image });
        }

        //Decrease the amount
        updatedUserCoins[sourceCoinIndex] = {
          ...updatedUserCoins[sourceCoinIndex],
          amount: sourceCoinAmount - amount,
        };
        Notiflix.Report.success(
          "Success",
          "Coin Exchange Successfully",
          "Close"
        );

        //Remove coin if amount is 0
        if (updatedUserCoins[sourceCoinIndex].amount === 0) {
          updatedUserCoins.splice(sourceCoinIndex, 1);
        }

        //Updating the userCoin state
        setUserCoins(updatedUserCoins);
      } else {
        Notiflix.Report.failure(
          "Error",
          "Not enought source coin quantity for the exchange",
          "Close"
        );
        // alert("Not enought source coin quantity for the exchange");
      }
    } else {
      Notiflix.Report.failure(
        "Error",
        "Invalid amount or source coin not found",
        "Close"
      );
      // alert("Invalid amount or source coin not found");
    }
  };

  const contextValue: UserCoinsContextProps = {
    userCoins,
    boughtCoins,
    exchangeCoins,
  };

  return (
    <UserCoinsContext.Provider value={contextValue}>
      {children}
    </UserCoinsContext.Provider>
  );
};

export const useUserCoins = () =>
  useContext(UserCoinsContext) as UserCoinsContextProps;
