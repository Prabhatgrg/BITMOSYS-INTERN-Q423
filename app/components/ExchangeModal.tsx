import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Button,
  useDisclosure,
  Select,
  SelectItem,
  Avatar,
} from "@nextui-org/react";
import { useUserCoins } from "../context/userCoins";
import Coins, { CryptoCoin } from "../coins/Coins";

interface ExchangeModalProps {
  coin: {
    name: string;
    amount: number;
    image: string;
  };
}

const ExchangeModal: React.FC<ExchangeModalProps> = ({ coin }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [amount, setAmount] = useState<number>(0);
  const [sourceCoin, setSourceCoin] = useState<string>("");
  const [targetCoin, setTargetCoin] = useState<string>("");
  const [targetCoinImage, setTargetCoinImage] = useState<string>("");
  const { userCoins, exchangeCoins } = useUserCoins();
  const coinList: CryptoCoin[] = Coins;

  // useEffect(() => {
  //   console.log("Source Coin updated: ", sourceCoin);
  //   console.log("Target Coin updated: ", targetCoin);
  //   console.log("Target Coin Image updated: ", targetCoinImage);
  // }, [sourceCoin, targetCoin, targetCoinImage]);

  useEffect(() => {
    console.log("Source Coin updated: ", sourceCoin);
  }, [sourceCoin])
  useEffect(() => {
    console.log("Target Coin updated: ", targetCoin);
  }, [targetCoin])
  useEffect(() => {
    console.log("Target Coin Image updated: ", targetCoinImage);
  }, [targetCoinImage])

  return (
    <>
      <Button onClick={() => {
        onOpen();
        setSourceCoin(coin.name);
      }} color="primary">
        Exchange
      </Button>
      <Modal
        backdrop="blur"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="bg-dark"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-white">
                Exchange {coin.name} with
              </ModalHeader>
              <ModalBody>
                <Select
                  label="Select Coin"
                  className="max-w-xs"
                  // placeholder="Select Coin"
                  color="primary"
                >
                  {coinList.map((coin) => (
                    <SelectItem
                      key={coin.name}
                      onClick={() => {
                        setTargetCoin(coin.name);
                        setTargetCoinImage(coin.image);
                      }}
                      startContent={
                        <Avatar
                          alt={coin.name}
                          className="w-6 h-6 text-dark"
                          src={`${coin.image}`}
                        />
                      }
                    >
                      {coin.name}
                    </SelectItem>
                  ))}
                </Select>
                <Input
                  type="number"
                  placeholder="Enter Amount"
                  labelPlacement="outside"
                  value={amount !== null ? amount.toString() : ""}
                  onChange={(e) => setAmount(parseFloat(e.target.value))}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onClick={onClose}>
                  Close
                </Button>
                <Button
                  color="primary"
                  onClick={() => {
                    exchangeCoins(sourceCoin, targetCoin, amount, targetCoinImage);
                    onClose();
                  }}
                >
                  Exchange
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ExchangeModal;
