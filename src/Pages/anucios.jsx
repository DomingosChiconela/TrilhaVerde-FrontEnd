import React from 'react';
import { Pencil, Eye, Trash } from 'phosphor-react';
import Header from '../components/header';
import { Footer } from '../components/footer';

const UserAds = () => {
  const items = [
    {
      id: 1,
      image: 'https://via.placeholder.com/40',
      name: 'Item 1',
      location: 'Localização 1',
      price: '$10.00',
      category: 'Categoria A',
      weight: '1kg',
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/40',
      name: 'Item 2',
      location: 'Localização 2',
      price: '$20.00',
      category: 'Categoria B',
      weight: '2kg',
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/40',
      name: 'Item 3',
      location: 'Localização 3',
      price: '$30.00',
      category: 'Categoria C',
      weight: '3kg',
    },
  ];

  const handleEdit = (id) => {
    console.log(`Editar item com ID: ${id}`);
  };

  const handleView = (id) => {
    console.log(`Visualizar item com ID: ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Deletar item com ID: ${id}`);
  };

  return (
    <>
      <Header /> 
      <div className="p-6 ">
        <div className="overflow-x-auto mt-8">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
            <thead>
              <tr className="bg-green-100 border-b border-gray-200">
                <th className="px-4 py-2 text-left text-gray-700">Imagem</th>
                <th className="px-4 py-2 text-left text-gray-700">Nome</th>
                <th className="px-4 py-2 text-left text-gray-700">Localização</th>
                <th className="px-4 py-2 text-left text-gray-700">Preço</th>
                <th className="px-4 py-2 text-left text-gray-700">Categoria</th>
                <th className="px-4 py-2 text-left text-gray-700">Peso</th>
                <th className="px-4 py-2 text-center text-gray-700">Editar</th>
                <th className="px-4 py-2 text-center text-gray-700">Detalhes</th>
                <th className="px-4 py-2 text-center text-gray-700">Deletar</th>
              </tr>
            </thead>
            <tbody>
              {items.length > 0 ? (
                items.map((item) => (
                  <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-4 py-2">
                      <img src={item.image} alt={item.name} className="w-10 h-10 rounded-full" />
                    </td>
                    <td className="px-4 py-2 text-gray-800">{item.name}</td>
                    <td className="px-4 py-2 text-gray-800">{item.location}</td>
                    <td className="px-4 py-2 text-gray-800">{item.price}</td>
                    <td className="px-4 py-2 text-gray-800">{item.category}</td>
                    <td className="px-4 py-2 text-gray-800">{item.weight}</td>
                    <td className="px-4 py-2 text-center">
                      <button
                        onClick={() => handleEdit(item.id)}
                        className="text-blue-500 hover:text-blue-700"
                      >
                        <Pencil size={20} />
                      </button>
                    </td>
                    <td className="px-4 py-2 text-center">
                      <button
                        onClick={() => handleView(item.id)}
                        className="text-blue-300 hover:text-blue-500"
                      >
                        <Eye size={20} />
                      </button>
                    </td>
                    <td className="px-4 py-2 text-center">
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="text-green-600 hover:text-green-800"
                      >
                        <Trash size={20} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9" className="px-4 py-2 text-center text-gray-500">Nenhum item encontrado.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <Footer /> 
    </>
  );
};

export default UserAds;
