"use client";

import React, { createContext, useContext, useState } from "react";

interface CryptoCoin {
  coinName: string;
  amount: number;
}

// interface UserCoinsContextProps {
//   userCoins: CryptoCoin[];
//   setUserCoins: React.Dispatch<React.SetStateAction<CryptoCoin[]>>;
// }

const UserCoinsContext = createContext<CryptoCoin | undefined>(
  undefined
);

export const UserCoinsProvider = ({ children }) => {
  const [userCoins, setUserCoins] = useState<CryptoCoin[]>([]);

  const boughtCoins = (coinName: string, amount: number) => {
    setUserCoins((prevOwnedCoins) => [...prevOwnedCoins, {coinName: coinName, amount: amount}]);
  };

  const contextValue = { userCoins, boughtCoins };

  return (
    <UserCoinsContext.Provider value={contextValue}>
      {children}
    </UserCoinsContext.Provider>
  );
};

export const useUserCoins = () => useContext(UserCoinsContext);
