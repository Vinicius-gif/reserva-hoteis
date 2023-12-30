/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import {
  FaSwimmingPool,
  FaWifi,
  FaRegSnowflake,
  FaCar,
  FaDog,
  FaStar
} from 'react-icons/fa';
import { GiAtSea } from 'react-icons/gi';

interface Props {
  id: string;
  name: string;
  image: string;
  location: string;
  describe: string;
  rating: number;
  stars: number;
  price: number;
  pool: boolean;
  wifi: boolean;
  air: boolean;
  park: boolean;
  sea: boolean;
  animals: boolean;
}

const CardHotel = (props: Props) => {
  const {
    name,
    id,
    image,
    location,
    rating,
    pool,
    air,
    park,
    sea,
    wifi,
    animals,
    describe,
    price
  } = props;

  const starIcons = Array.from({ length: props.stars }, (_, index) => (
    <FaStar key={index} className="text-yellow-500 -m-1" />
  ));

  return (
    <div className="flex max-w-4xl mx-auto my-8 bg-white rounded-lg overflow-hidden shadow-md md:flex-col">
      <div className="w-1/3 md:w-1/2 md:h-60 flex items-center justify-center self-center">
        <img
          src={image}
          alt="Imagem de hotel"
          className="object-cover h-full w-full"
        />
      </div>
      <div className="w-2/3 ml-6 pt-9 pr-2 border-r md:border-b md:w-full">
        <h2 className="text-2xl font-bold mb-6">{name}</h2>
        <p className="text-gray-600 mb-4">{location}</p>
        <div className="flex items-center gap-2 mb-4">
          <p className="text-yellow-500 font-bold mr-1">{rating}</p>
          {starIcons}
          <ul className="flex gap-2 ml-4">
            {pool && <FaSwimmingPool />}
            {wifi && <FaWifi />}
            {air && <FaRegSnowflake />}
            {park && <FaCar />}
            {sea && <GiAtSea />}
            {animals && <FaDog />}
          </ul>
        </div>
        <p className="text-gray-700 mb-6">{describe}</p>
      </div>
      <div className="ml-2 w-1/4 pt-9 flex flex-col items-center md:flex-row md:justify-between md:w-full p-4 md:items-center">
        <div>
          <p className="text-gray-600">Preço por noite</p>
          <p className="text-2xl font-bold mb-4">R$: {price}</p>
        </div>
        <Link href={`/detalhesHotel/${id}`}>
          <button className="bg-blue-500 text-white px-4 py-2 mt-6 rounded-md">
            Ver detalhe
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CardHotel;
