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
          id={hotel.id}
          name={hotel.nome}
          price={hotel.preco}
          image={hotel.imagens[0]}
          location={hotel.localizacao}
          rating={hotel.avaliacao}
          air={hotel.ar_condicionado}
          animals={hotel.aceita_animais}
          describe={hotel.descricao}
          park={hotel.estacionamento}
          pool={hotel.piscina}
          sea={hotel.vista_para_o_mar}
          stars={hotel.estrelas}
          wifi={hotel.wifi}
        />
      ))}
    </div>
  );
};

export default HotelsList;
