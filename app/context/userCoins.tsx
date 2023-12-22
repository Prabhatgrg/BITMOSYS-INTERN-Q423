"use client"
import { createContext, useContext, useState } from 'react'

const userCoinContext = createContext(undefined);

export function userCoins() {
    const [ownedCoins, setCoins] = useState();
}