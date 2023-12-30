import React from 'react';

import CardHotel from '../../../components/hotelsList/cardHotel';
import hotels from '../../../data/hoteis.json';

const DetalhesHotel = ({ params }: { params: { id: string } }) => {
  const hotel = hotels.find((hotel) => hotel.id === params.id);

  if (!hotel) {
    return (
      <p className="text-center mt-8 text-2xl font-bold">
        Hotel não encontrado
      </p>
    );
  }

  const {
    nome,
    id,
    imagens,
    avaliacao,
    descricao,
    localizacao,
    preco,
    estrelas,
    piscina,
    wifi,
    ar_condicionado,
    estacionamento,
    vista_para_o_mar,
    aceita_animais
  } = hotel;

  return (
    <div className="">
      <CardHotel
        key={id}
        id={id}
        name={nome}
        price={preco}
        image={imagens[0]}
        location={localizacao}
        rating={avaliacao}
        air={ar_condicionado}
        animals={aceita_animais}
        describe={descricao}
        park={estacionamento}
        pool={piscina}
        sea={vista_para_o_mar}
        stars={estrelas}
        wifi={wifi}
      />
    </div>
  );
};

export default DetalhesHotel;
