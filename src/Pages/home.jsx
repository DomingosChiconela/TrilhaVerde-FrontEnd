import React from 'react';

// const products = [
//   {
//     id: 1,
//     name: 'Produto 1',
//     description: 'Descrição breve do produto 1. Aqui você pode incluir detalhes importantes.',
//     price: 'R$ 99,90',
//     imageUrl: 'https://via.placeholder.com/300'
//   },
//   {
//     id: 2,
//     name: 'Produto 2',
//     description: 'Descrição breve do produto 2. Aqui você pode incluir detalhes importantes.',
//     price: 'R$ 129,90',
//     imageUrl: 'https://via.placeholder.com/300'
//   },
  
// ];

export const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Meus Produtos</h1>
          <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300">
            Adicionar Novo Produto
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-lg">
              <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover rounded-t-lg mb-4" />
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <span className="text-lg font-bold text-gray-900">{product.price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


