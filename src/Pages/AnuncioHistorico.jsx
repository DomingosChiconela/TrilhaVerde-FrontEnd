import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';

const AnuncioHistorico = () => {
  const [anuncios, setAnuncios] = useState([]);
  const [editingAnuncio, setEditingAnuncio] = useState(null);
  const { register, handleSubmit, control, reset } = useForm();

  useEffect(() => {
    fetchAnuncios();
  }, []);

  const fetchAnuncios = async () => {
    try {
      const response = await axios.get('/api/anuncios');
      if (Array.isArray(response.data)) {
        setAnuncios(response.data);
      } else {
        console.error('A resposta da API não é um array:', response.data);
      }
    } catch (error) {
      console.error('Erro ao buscar anúncios:', error);
    }
  };

  const handleEditClick = (anuncio) => {
    setEditingAnuncio(anuncio);
    reset(anuncio); 
  };

  const onSubmit = async (data) => {
    try {
      await axios.put(`/api/anuncios/${editingAnuncio.id}`, data); 
      fetchAnuncios();
      setEditingAnuncio(null); 
    } catch (error) {
      console.error('Erro ao atualizar anúncio:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/anuncios/${id}`); 
      fetchAnuncios();
    } catch (error) {
      console.error('Erro ao excluir anúncio:', error);
    }
  };

  return (
    <div className="container mx-auto p-6 bg-gray-100">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Histórico de Anúncios</h1>
      </header>

      <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Anúncios Recentes</h2>
        {anuncios.length === 0 ? (
          <p className="text-gray-600">Nenhum anúncio encontrado.</p>
        ) : (
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-yellow-200 border-b">
                <th className="p-4 text-left text-gray-700">Título</th>
                <th className="p-4 text-left text-gray-700">Data de Criação</th>
                <th className="p-4 text-left text-gray-700">Status</th>
                <th className="p-4 text-left text-gray-700">Ações</th>
              </tr>
            </thead>
            <tbody>
              {anuncios.map((anuncio) => (
                <tr key={anuncio.id} className="border-b hover:bg-gray-50">
                  <td className="p-4 text-gray-800">{anuncio.titulo}</td>
                  <td className="p-4 text-gray-800">{new Date(anuncio.dataCriacao).toLocaleDateString()}</td>
                  <td className="p-4 text-gray-800">{anuncio.status}</td>
                  <td className="p-4 flex space-x-2">
                    <button
                      className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
                      onClick={() => handleEditClick(anuncio)}
                    >
                      Editar
                    </button>
                    <button
                      className="px-4 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition"
                      onClick={() => handleDelete(anuncio.id)}
                    >
                      Deletar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {editingAnuncio && (
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Editar Anúncio</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="titulo" className="block text-gray-700 font-medium">Título:</label>
              <Controller
                name="titulo"
                control={control}
                defaultValue={editingAnuncio.titulo} 
                render={({ field }) => (
                  <input
                    {...field}
                    id="titulo"
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                )}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="status" className="block text-gray-700 font-medium">Status:</label>
              <Controller
                name="status"
                control={control}
                defaultValue={editingAnuncio.status} 
                render={({ field }) => (
                  <input
                    {...field}
                    id="status"
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                )}
              />
            </div>
            <div className="flex space-x-4">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
              >
                Salvar
              </button>
              <button
                type="button"
                className="px-4 py-2 bg-gray-500 text-white font-semibold rounded-md hover:bg-gray-600 transition"
                onClick={() => setEditingAnuncio(null)}
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AnuncioHistorico;
