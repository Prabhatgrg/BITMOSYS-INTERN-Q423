"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { CryptoCoin } from "../coins/Coins";
import { Report } from "notiflix/build/notiflix-report-aio";

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

interface UserCoinsProviderProps {
  children: ReactNode;
}

const UserCoinsContext = createContext<UserCoinsContextProps | undefined>(
  undefined
);

export const UserCoinsProvider: React.FC<UserCoinsProviderProps> = ({
  children,
}) => {
  const [userCoins, setUserCoins] = useState<CryptoCoin[]>(() => {
    if (typeof window !== "undefined") {
      //To load the stored user coins
      const storedCoins = window.localStorage.getItem("userCoins");

      //Used try catch method for error handling
      try {
        return storedCoins ? JSON.parse(storedCoins) : [];
      } catch (error) {
        console.error("Error parsing stored coins:", error);
        return [];
      }
    } else {
      // console.error("Window is undefined");
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
    const buyLimit = 1000;
    if (amount > buyLimit) {
      Report.failure(`Cannot buy more than ${buyLimit}`, "", "Close");
      return;
    }

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
    Report.success("Coin Bought Successfully", "", "Close");
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
        Report.failure("Cannot exchange with the same coin", "", "Close");
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
        Report.success("Coin Exchange Successfully", "", "Close");

        //Remove coin if amount is 0
        if (updatedUserCoins[sourceCoinIndex].amount === 0) {
          updatedUserCoins.splice(sourceCoinIndex, 1);
        }

        //Updating the userCoin state
        setUserCoins(updatedUserCoins);
      } else {
        Report.failure("Not enough coin", "", "Close");
      }
    } else {
      Report.failure("Invalid amount or source coin not found", "", "Close");
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
