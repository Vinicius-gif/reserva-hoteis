/* eslint-disable @next/next/no-img-element */
import React from 'react';

import FormDestino from '../../../components/formDestino';
import hotels from '../../../data/hoteis.json';
import CardDetalhes from './components/cardDetalhes';

const DetalhesHotel = ({ params }: { params: { id: string } }) => {
  const hotel = hotels.find((hotel) => hotel.id === params.id);

  if (!hotel) {
    return (
      <p className="text-center mt-8 text-2xl font-bold">
        Hotel não encontrado
      </p>
    );
  }

  const { nome, id, avaliacao, localizacao, preco, estrelas } = hotel;

  return (
    <div className="">
      <FormDestino />
      <div className="w-full my-12 flex items-center justify-center">
        <CardDetalhes
          key={id}
          name={nome}
          location={localizacao}
          stars={estrelas}
          price={preco}
          rating={avaliacao}
        />
      </div>
    </div>
  );
};

export default DetalhesHotel;
