import React, { useState, useEffect } from "react";

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

  useEffect(() => {
    if(showModal){
      setAmount("");
    }
  }, [showModal]);

  const handleBuy = () => {
    onBuy(amount);
    onClose();
  };

  return (
    showModal && (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="bg-amber-600 rounded-lg p-2 pt-4 flex flex-col justify-start w-96 h-64">
          <h2 className="text-4xl text-center font-bold">Buy {coinName}</h2>
          <div className="flex flex-col pl-4">
            <label htmlFor="amount" className="pt-6 mb-2 ">
              Amount:
            </label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="border-2 border-gray-300 rounded-md w-80 flex text-black"
            />
          </div>
          <div className="mt-8 flex justify-evenly">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-1 rounded-full"
              onClick={handleBuy}
            >
              Buy
            </button>
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white px-4 py-1 rounded-full"
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
