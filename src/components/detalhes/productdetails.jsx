// src/pages/ProductDetailPage.js

import React from "react";
import { useLocation } from "react-router-dom";

export const ProductDetailPage = () => {
  const location = useLocation();
  const { product } = location.state || {};

  if (!product) {
    return <div>Produto não encontrado.</div>;
  }

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Detalhes do Produto</h1>
      <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6">
        <img
          src="https://via.placeholder.com/300"
          alt="Placeholder"
          className="w-full h-48 object-cover rounded-lg"
        />
        <h2 className="text-2xl font-bold mt-4">{product.name}</h2>
        <p className="text-gray-600 text-sm mt-2">Categoria: {product.category}</p>
        <p className="text-gray-600 text-sm">Peso: {product.weight} kg</p>
        <p className="text-gray-600 text-sm mt-2">Localização: {product.location}</p>
        <p className="text-lg font-bold mt-4">Preço: {product.price}</p>
        <p className="text-gray-800 mt-4">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetailPage;
