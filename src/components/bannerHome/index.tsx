import React from 'react';

import CardVantagem from './cardVantagem';

const BannerHome = () => {
  return (
    <div className="flex sm:grid bg-blue-500 p-4 md:p-8 rounded-md mx-auto my-6 max-w-5xl mb-4 gap-3 items-center justify-center">
      <h2 className="text-white font-medium text-xl md:text-base mr-3">
        Encontre e reserve a sua estadia perfeita
      </h2>
      <CardVantagem
        describe="Ganhe recompensas em todas as diárias da sua estadia"
        icon="moon"
      />
      <CardVantagem
        describe="Economize mais com os Preços para Associados."
        icon="tag"
      />
      <CardVantagem
        describe="Opções de cancelamento grátis caso os planos mudem."
        icon="calendar"
      />
    </div>
  );
};

export default BannerHome;
