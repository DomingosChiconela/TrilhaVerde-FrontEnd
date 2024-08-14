// src/Pages/NotFound.jsx
import React from 'react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
        <h1 className="text-4xl font-bold text-red-500 mb-4">404</h1>
        <p className="text-lg text-gray-700 mb-4">Página não encontrada.</p>
        <p className="text-gray-600">
          A página que você está procurando pode ter sido removida ou não está disponível.
        </p>
        <a href="/" className="text-blue-600 hover:underline mt-4 inline-block">
          Voltar para a página inicial
        </a>
      </div>
    </div>
  );
};

export default NotFound;
