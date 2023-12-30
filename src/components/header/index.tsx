/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-500 p-4">
      <nav className="container mx-auto flex flex-wrap items-center justify-around">
        <Link href="/">
          <div className="flex items-center">
            <img
              src="/icons/hotel-icon.png"
              alt="Hotel Icon"
              className="w-10 h-10 mr-2"
            />
            <span className="text-white font-bold text-2xl">Seu hotel.com</span>
          </div>
        </Link>
        <div className="flex space-x-4 items-center">
          <div className="flex items-center">
            <Link href="/login" className="mr-4">
              <button className="bg-white hover:bg-gray-100 text-blue-500 px-4 py-2 rounded focus:outline-none focus:shadow-outline-blue">
                Login
              </button>
            </Link>
            <Link href="/cadastro">
              <button className="bg-white hover:bg-gray-100 text-blue-500 px-4 py-2 rounded focus:outline-none focus:shadow-outline-blue">
                Cadastro
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
