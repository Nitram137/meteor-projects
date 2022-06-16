import React from "react";
import { CheckCircleIcon } from '@heroicons/react/solid';

export const SuccessAlert = ({ message }) => {
    return (
      <div className="p-4 rounded-md bg-green-50">
        <div className="flex">
          <div className="flex-shrink-0">
            <CheckCircleIcon className="w-5 h-5 text-green-400" aria-hidden="true" />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-green-800">{message}</h3>
          </div>
        </div>
      </div>
    )
  }