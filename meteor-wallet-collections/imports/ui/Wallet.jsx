import React from "react";

export const Wallet = () => {

  const wallet = {
    _id: "123123123",
    balance: 5,
    currency: 'BTC'
  };


  return (
    <div class="flex font-sans shadow-md my-10">
      <form class="flex-auto p-6">
        <div class="flex flex-wrap">
        <div class="w-full flex-none text-sm font-medium text-gray-500">
            Main account
          </div>
          <div class="w-full flex-none text-sm font-medium text-gray-500 mt-2">
            Wallet ID:
          </div>
          <h1 class="flex-auto text-lg font-semibold text-gray-700">
            {wallet._id}
          </h1>
          <div class="text-lg font-bold text-gray-700">
            {`${wallet.balance} ${wallet.currency}`}
          </div>
        </div>
        
        <div class="flex space-x-4 text-sm font-medium">
          <div class="flex-auto flex space-x-4 mt-4">
            <button
            type="button"
            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600"
            >
              Add money
            </button>
            <button
            type="button"
            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600"
            >
              Transfer money
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}