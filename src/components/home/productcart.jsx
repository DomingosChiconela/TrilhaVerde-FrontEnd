// src/components/ProductCard.js

import React from "react";
import { useNavigate } from "react-router-dom";

const simulatedProduct = {
  name: 'Produto Exemplo',
  category: 'Categoria Exemplo',
  weight: 1.5,
  description: 'Descrição do produto exemplo.',
  location: 'Localização Exemplo',
  price: 'R$ 100,00',
};

export const ProductCard = () => {
  const navigate = useNavigate();

  const handleRequest = () => {
    navigate('/notifications', { state: { product: simulatedProduct } });
  };

  const handleViewDetails = () => {
    navigate('/product-details', { state: { product: simulatedProduct } });
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md m-4 w-screen sm:w-96 lg:w-1/3 overflow-hidden text-center">
      <img
        src="https://via.placeholder.com/300"
        alt="Placeholder"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <p className="text-gray-600 text-sm mb-1">{simulatedProduct.category}</p>
        <p className="text-gray-600 text-sm mb-1">Peso: {simulatedProduct.weight} kg</p>
        <p className="text-lg font-bold text-gray-800 mb-4">{simulatedProduct.price}</p>
        <div className="flex justify-center space-x-4 mt-4">
          <button
            onClick={handleViewDetails}
            className="px-4 py-2 border rounded-full bg-blue-500 text-white hover:bg-blue-600 transition duration-300"
          >
            i
          </button>
          <button
            onClick={handleRequest}
            className="px-4 py-2 border rounded-lg bg-green-500 text-white hover:bg-green-600 transition duration-300"
          >
            Requisitar
          </button>
        </div>
      </div>
    </div>
  );
};
