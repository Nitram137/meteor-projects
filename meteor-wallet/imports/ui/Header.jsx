import React from "react";

export const Header = () => {
  return (
    <header className="bg-green-600">
      <nav className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex items-center justify-between w-full py-1">
          <div className="flex items-center">
            <a href="#">
              <span className="sr-only">Meteor Wallet</span>
              <img
                className="w-auto h-20"
                src="/images/logo.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
