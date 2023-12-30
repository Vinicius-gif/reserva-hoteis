/* eslint-disable @next/next/no-img-element */
import React from 'react';
import {
  FaSwimmingPool,
  FaWifi,
  FaRegSnowflake,
  FaCar,
  FaDog
} from 'react-icons/fa';
import { GiAtSea } from 'react-icons/gi';

interface Props {
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
  return (
    <div className="flex max-w-4xl max-h-60 mx-auto my-8 bg-white rounded-lg overflow-hidden shadow-md">
      <div className="w-1/3 h-full">
        <img src={props.image} alt="Imagem de hotel" className="" />
      </div>
      <div className="w-2/3 mx-6 pt-3 pr-2 border-r">
        <h2>{props.name}</h2>
        <p>{props.location}</p>
        <div className="flex gap-2">
          <p>{props.rating}</p>
          <p>{props.stars}</p>
          <ul className="flex justify-around items-center gap-2">
            {props.pool && <FaSwimmingPool />}
            {props.wifi && <FaWifi />}
            {props.air && <FaRegSnowflake />}
            {props.park && <FaCar />}
            {props.sea && <GiAtSea />}
            {props.animals && <FaDog />}
          </ul>
        </div>
        <p>{props.describe}</p>
      </div>
      <div className="ml-2 w-1/5 pt-6">
        <p>Preço por noite</p>
        <p>R$: {props.price}</p>
        <button>Ver detalhes</button>
      </div>
    </div>
  );
};

export default CardHotel;
