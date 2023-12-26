import React, { useState } from "react";
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

interface ExchangeModalProps {
  coin: {
    name: string;
    amount: number;
    image: string;
  };
}

const ExchangeModal: React.FC<ExchangeModalProps> = ({ coin }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [amount, setAmount] = useState<number | null>(null);
  const { userCoins, boughtCoins } = useUserCoins();

  return (
    <>
      <Button onClick={onOpen} color="primary">
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
                  placeholder="Select Coin"
                  color="primary"
                >
                  {userCoins.map((coin) => (
                    <SelectItem
                      key={coin.name}
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
                    if (amount !== null) {
                      boughtCoins(coin.name, amount, coin.image);
                      onClose();
                    }
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
