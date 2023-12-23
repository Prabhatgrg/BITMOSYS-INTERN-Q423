// BuyModal.tsx
import React, { useState, useEffect } from "react";
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
// import Crypto from "../cryptos/page";

interface BuyModalProps {
  coin: {
    name: string;
    amount: number;
  };
}

const BuyModal: React.FC<BuyModalProps> = ({ coin }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [amount, setAmount] = useState<number>(0);

  useEffect(() => {
    if (isOpen) {
      setAmount(0);
    }
  }, [isOpen]);

  return (
    <>
      <Button onPress={onOpen} color="primary">
        Buy
      </Button>
      <Modal backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange} className="bg-dark">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Buy {coin.name}
              </ModalHeader>
              <ModalBody>
                <Input
                  type="number"
                  label="amount"
                  placeholder="Enter Amount"
                  labelPlacement="outside"
                  value={amount.toString()}
                  onChange={(e) => setAmount(parseFloat(e.target.value))}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="primary"
                  onPress={() => {
                    // Handle the buy logic here
                    console.log(`Bought ${amount} of ${coin.name}`);
                    onClose();
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
