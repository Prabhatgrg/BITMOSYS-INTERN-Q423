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
import { useUserCoins } from "../context/userCoins"; // Import useUserCoins

interface BuyModalProps {
  coin: {
    name: string;
    // amount: number;
  };
}

const BuyModal: React.FC<BuyModalProps> = ({ coin }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [amount, setAmount] = useState<number | null>(null);
  const { boughtCoins } = useUserCoins(); // Use useUserCoins hook

  useEffect(() => {
    if (isOpen) {
      setAmount(null);
    }
  }, [isOpen]);

  return (
    <>
      <Button onClick={onOpen} color="primary"> {/* Fix onClick prop */}
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
                  value={amount !== null ? amount.toString() : ''}
                  onChange={(e) => setAmount(parseFloat(e.target.value))}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onClick={onClose}> {/* Fix onClick prop */}
                  Close
                </Button>
                <Button
                  color="primary"
                  onClick={() => {
                    boughtCoins(coin.name, amount!); // Call boughtCoins function
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