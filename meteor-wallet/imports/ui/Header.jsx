import React from "react";

export const Header = () => {
  return (
    <header className="bg-gradient-to-r from-green-700 via-green-500 to-green-700">
      <nav className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex items-center justify-around w-full py-4 font-bold">
            <a className="flex flex-row items-center" href="#">
              <img
                className="w-auto h-10 border"
                src="/images/logo.png"
                alt=""
              />
              <span className="pl-3">Meteor Wallet</span>
            </a>
          <a href="#">Stuff</a>
          <a href="#">More Stuff</a>
          <a href="#">Even More Stuff</a>
        </div>
      </nav>
    </header>
  )
}
