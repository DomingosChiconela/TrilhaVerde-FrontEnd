import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('/api/users');
        // Verifique se a resposta é um array
        if (Array.isArray(response.data)) {
          setUsers(response.data);
        } else {
          setError('Dados inválidos recebidos da API.');
        }
      } catch (error) {
        console.error('Erro ao buscar usuários', error);
        setError('Erro ao buscar usuários. Tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (loading) {
    return <p className="text-center text-blue-500">Carregando...</p>;
  }

  if (error) {
    return <p className="text-red-600 text-center">{error}</p>;
  }

  return (
    <div className="p-6">
      <h3 className="text-2xl font-semibold mb-4 text-gray-800">Gestão de Usuários</h3>
      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-sm">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Nome</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Ações</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">{user.id}</td>
                <td className="py-2 px-4 border-b">{user.name}</td>
                <td className="py-2 px-4 border-b">{user.email}</td>
                <td className="py-2 px-4 border-b text-center">
                  <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                    Excluir
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="py-2 px-4 text-center text-gray-500">Nenhum usuário encontrado</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
