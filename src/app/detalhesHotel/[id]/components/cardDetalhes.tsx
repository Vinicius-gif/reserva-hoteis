/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { FaStar } from 'react-icons/fa';

interface Props {
  name: string;
  location: string;
  rating: number;
  stars: number;
  price: number;
}

const CardDetalhes = (props: Props) => {
  const starIcons = Array.from({ length: props.stars }, (_, index) => (
    <FaStar key={index} className="text-yellow-500 -m-1" />
  ));

  return (
    <section className="w-1/3 h-auto bg-white flex items-center justify-between p-5 border rounded-lg shadow-md">
      <div className="w-1/2 h-1/2 flex flex-col items-start border-r mr-2">
        <div className="flex items-center mb-2">
          {starIcons}
          <span className="ml-2 text-lg">{props.rating}</span>
        </div>
        <h2 className="text-xl font-semibold">{props.name}</h2>
        <p className="text-gray-500">{props.location}</p>
      </div>
      <div className="w-1/2 flex flex-col items-end">
        <p className="text-gray-600 mb-2">
          Preço por noite com impostos a partir de
        </p>
        <p className="text-xl font-semibold">{props.price}</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Escolher datas
        </button>
      </div>
    </section>
  );
};

export default CardDetalhes;
