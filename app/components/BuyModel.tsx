import React, { useState } from "react";

interface BuyModalProps {
  coinName: string;
  showModal: boolean;
  onClose: () => void;
  onBuy: (amount: string) => void;
}

const BuyModal: React.FC<BuyModalProps> = ({
  coinName,
  showModal,
  onClose,
  onBuy,
}) => {
  const [amount, setAmount] = useState("");

  const handleBuy = () => {
    onBuy(amount);
    onClose();
  };

  return (
    showModal && (
      <div className="fixed">
        <div className="bg-dark">
          <h2>Buy {coinName}</h2>
          <label htmlFor="amount">
            Amount:
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </label>
          <div className="mt-5">
            <button
              className="bg-blue text-white px-5 py-4 rounded-full"
              onClick={handleBuy}
            >
              Buy
            </button>
            <button
              className="bg-gray text-white px-5 py-4 rounded-full"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default BuyModal;