/* eslint-disable @next/next/no-img-element */
import React from 'react';

interface Props {
  name: string;
  image: string;
  location: string;
  rating: number;
  price: number;
}

const CardHotel = ({ name, image, location, rating, price }: Props) => {
  return (
    <div className="max-w-md mx-auto my-4 bg-white rounded-lg overflow-hidden shadow-md">
      <div className="relative h-48 overflow-hidden">
        <img
          className="w-full h-full object-cover object-center transform scale-110 transition-transform duration-500 hover:scale-100"
          src={image}
          alt={name}
        />
      </div>
      <div className="p-4">
        <h2 className="text-2xl font-semibold mb-2">{name}</h2>
        <p className="text-gray-600 mb-2">{location}</p>
        <div className="flex items-center mb-2">
          <span className="text-yellow-500 mr-1">
            {Array.from({ length: Math.floor(rating) }, (_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="h-5 w-5 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-1v1H8v-1H7c-1.11 0-2-.89-2-2v-1.35l4-3.22 4 3.22V14c0 1.11-.89 2-2 2zm1-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-1-9h-2v6h2z" />
              </svg>
            ))}
          </span>
          <span className="text-gray-600">{rating.toFixed(1)}</span>
        </div>
        <p className="text-lg font-semibold text-blue-500">${price}/noite</p>
      </div>
    </div>
  );
};

export default CardHotel;
