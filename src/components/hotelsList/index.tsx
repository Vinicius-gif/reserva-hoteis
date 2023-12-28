import React from 'react';

import hoteis from '../../data/hoteis.json';
import CardHotel from './cardHotel';

const HotelsList = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold size-5 m-5 text-center w-auto">
        Ofertas de hotéis em todo Brasil
      </h2>
      {hoteis.map((hotel) => (
        <CardHotel
          key={hotel.id}
          name={hotel.nome}
          price={hotel.preco}
          image={hotel.imagens[0]}
          location={hotel.localizacao}
          rating={hotel.avaliacao}
        />
      ))}
    </div>
  );
};

export default HotelsList;
