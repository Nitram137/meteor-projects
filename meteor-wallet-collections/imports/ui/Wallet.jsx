import React from "react";
import { useState } from 'react'
import { Modal } from "./components/Modal";

export const Wallet = () => {

  const [open, setOpen] = useState(false);
  const [isTransferring, setIsTransferring] = useState(false);
  const [amount, setAmount] = useState(0);
  const [destinationWallet, setDestinationWallet] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const wallet = {
    _id: "123123123",
    balance: 5,
    currency: 'BTC'
  };

  const addTransaction = () => {

  }

  return (
    <>
    <div className="flex my-10 font-sans shadow-md">
      <form className="flex-auto p-6">
        <div className="flex flex-wrap">
        <div className="flex-none w-full text-sm font-medium text-gray-500">
            Main account
          </div>
          <div className="flex-none w-full mt-2 text-sm font-medium text-gray-500">
            Wallet ID:
          </div>
          <h1 className="flex-auto text-lg font-semibold text-gray-700">
            {wallet._id}
          </h1>
          <div className="text-lg font-bold text-gray-700">
            {`${wallet.balance} ${wallet.currency}`}
          </div>
        </div>
        
        <div className="flex space-x-4 text-sm font-medium">
          <div className="flex flex-auto mt-4 space-x-4">
            <button
            type="button"
            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600"
            onClick={() => {
              setIsTransferring(false);
              setOpen(true);
              }}
            >
              Add money
            </button>
            <button
            type="button"
            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600"
            onClick={() => {
              setIsTransferring(true);
              setOpen(true);
              }}
            >
              Transfer money
            </button>
          </div>
        </div>
      </form>
    </div>

    <Modal
      open={open}
      setOpen={setOpen}
      title={
        isTransferring ? 'Transfer money to other wallet' : 'Add money to your wallet'
      }
      body={
        <>
        {isTransferring && (
        <div>
          <label htmlFor="destination" className="block text-sm font-medium text-gray-700">
            Destination wallet
          </label>
          <input
            type="string"
            id="destination"
            value={destinationWallet}
            onChange={(e) => setDestinationWallet(e.target.value)}
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
          />
        </div>)}

        <div>
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
            Amount
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            placeholder="0.00"
          />
        </div>
        </>
      }
      footer={
        <button
          type="button"
          className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600"
          onClick={addTransaction}
        >
          {isTransferring ? "Transfer" : "Add"}
        </button>
      }
      errorMessage={errorMessage}
    />
    </>
  )
}