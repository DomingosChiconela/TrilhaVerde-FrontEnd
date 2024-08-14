import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pencil, Eye, Trash } from 'phosphor-react';

// Registrar componentes do Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const UserProfileTable = () => {
  // Dados fictícios para o gráfico
  const provincialData = [
    { label: 'Província A', value: 30 },
    { label: 'Província B', value: 20 },
    { label: 'Província C', value: 50 },
  ];

  const pieData = {
    labels: provincialData.map(item => item.label),
    datasets: [{
      data: provincialData.map(item => item.value),
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      borderColor: '#fff',
      borderWidth: 1,
    }]
  };

  // Dados fictícios para a tabela
  const users = [
    { id: 1, profilePicture: 'https://via.placeholder.com/40', name: 'Usuário 1' },
    { id: 2, profilePicture: 'https://via.placeholder.com/40', name: 'Usuário 2' },
    { id: 3, profilePicture: 'https://via.placeholder.com/40', name: 'Usuário 3' },
  ];

  const handleEdit = (id) => {
    console.log(`Editar usuário com ID: ${id}`);
  };

  const handleView = (id) => {
    console.log(`Visualizar usuário com ID: ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Deletar usuário com ID: ${id}`);
  };

  return (
    <div className="p-6">
      {/* Layout com cartão e gráfico lado a lado */}
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        {/* Cartão à esquerda */}
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 flex-shrink-0 w-full md:w-1/2">
          <h2 className="text-2xl font-semibold gradient-text mb-4">Resumo da Atividade</h2>
          <p className="text-gray-700 mb-4">Aqui você pode ver um resumo das atividades e desempenho geral dos usuários.</p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li><strong>Total de Usuários:</strong> 150</li>
            <li><strong>Usuários Ativos:</strong> 120</li>
            <li><strong>Usuários Inativos:</strong> 30</li>
          </ul>
        </div>

        {/* Gráfico à direita */}
        <div className="w-full md:w-1/2 h-64 border border-gray-300 flex items-center justify-center">
          <Pie data={pieData} />
        </div>
      </div>

      {/* Tabela com 5 colunas */}
      <div className="overflow-x-auto mt-8">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
          <thead>
            <tr className="bg-gray-100 border-b border-gray-200">
              <th className="px-4 py-2 text-left text-gray-600">Perfil</th>
              <th className="px-4 py-2 text-left text-gray-600">Nome</th>
              <th className="px-4 py-2 text-center text-gray-600">Editar</th>
              <th className="px-4 py-2 text-center text-gray-600">Detalhes</th>
              <th className="px-4 py-2 text-center text-gray-600">Deletar</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user) => (
                <tr key={user.id} className="border-b border-gray-200">
                  <td className="px-4 py-2">
                    <img src={user.profilePicture} alt={user.name} className="w-10 h-10 rounded-full" />
                  </td>
                  <td className="px-4 py-2 text-gray-700">{user.name}</td>
                  <td className="px-4 py-2 text-center">
                    <button onClick={() => handleEdit(user.id)} className="text-blue-500 hover:text-blue-700">
                      <Pencil size={20} />
                    </button>
                  </td>
                  <td className="px-4 py-2 text-center">
                    <button onClick={() => handleView(user.id)} className="text-green-500 hover:text-green-700">
                      <Eye size={20} />
                    </button>
                  </td>
                  <td className="px-4 py-2 text-center">
                    <button onClick={() => handleDelete(user.id)} className="text-red-500 hover:text-red-700">
                      <Trash size={20} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="px-4 py-2 text-center text-gray-500">Nenhum usuário encontrado.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserProfileTable;
