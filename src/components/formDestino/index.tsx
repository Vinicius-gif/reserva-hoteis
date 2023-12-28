'use client';

import React, { useState } from 'react';
import { FiMapPin, FiCalendar, FiSearch } from 'react-icons/fi'; // Importe os ícones necessários

// Componente do formulário de pesquisa de reserva de hotéis
const FormDestino = () => {
  const [location, setLocation] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');

  // Função para lidar com a submissão do formulário
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Local:', location);
    console.log('Data de Entrada:', checkInDate);
    console.log('Data de Saída:', checkOutDate);
  };

  return (
    <div className="w-full p-3 bg-blue-400">
      <div className="max-w-5xl mx-auto my-4 p-6 bg-white rounded shadow-md md:flex md:items-center md:justify-around">
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-auto md:mx-4 md:flex md:items-center md:justify-around gap-4"
        >
          <div className="relative mb-4">
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-600"
            >
              <FiMapPin
                className="absolute left-3 top-4 text-gray-500 mr-1"
                size={20}
              />
            </label>
            <input
              type="text"
              id="location"
              className="pl-8 mt-1 p-2 w-full border border-gray-300 rounded-md"
              placeholder="Digite o local desejado"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>
          <div className="relative mb-4 flex items-center">
            <label
              htmlFor="checkInDate"
              className="block text-sm font-medium text-gray-600"
            >
              <FiCalendar className="mr-2 text-gray-500" />
              Data de Entrada
            </label>
            <input
              type="date"
              id="checkInDate"
              className="pl-8 mt-1 p-2 w-1/2 border-r border-gray-300 rounded-l-md"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
              required
            />
            <input
              type="date"
              id="checkOutDate"
              className="pl-8 mt-1 p-2 w-1/2 border-l border-gray-300 rounded-r-md"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md flex items-center hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
          >
            <FiSearch className="mr-2" />
            Pesquisar
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormDestino;
