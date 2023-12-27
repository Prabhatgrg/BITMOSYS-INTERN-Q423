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
} from "@nextui-org/react";
import { useUserCoins } from "../context/userCoins";

interface BuyModalProps {
  coin: {
    name: string;
    image: string;
  };
}

const BuyModal: React.FC<BuyModalProps> = ({ coin }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [amount, setAmount] = useState<number | null>(null);
  const { boughtCoins } = useUserCoins();

  return (
    <>
      <Button onClick={onOpen} color="primary">
        Buy
      </Button>
      <Modal
        backdrop="blur"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="bg-black text-white"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Buy {coin.name}
              </ModalHeader>
              <ModalBody>
                <Input
                  type="number"
                  placeholder="Enter Amount"
                  labelPlacement="outside"
                  className="text-white"
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
                    if (amount === null || amount <= 0) {
                      alert("Error: Amount needs to be greater than 0");
                    } else {
                      boughtCoins(coin.name, amount, coin.image);
                      onClose();
                    }
                  }}
                >
                  Buy
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default BuyModal;
