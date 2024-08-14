import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Feedbacks = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await axios.get('/api/feedbacks');
        console.log('Dados recebidos:', response.data); // Adicione esse log
        if (Array.isArray(response.data)) {
          setFeedbacks(response.data);
        } else {
          throw new Error('Dados inválidos recebidos da API.');
        }
      } catch (error) {
        console.error('Erro ao buscar feedbacks:', error.message); // Exiba a mensagem de erro
        setError('Erro ao carregar feedbacks. Tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    };

    fetchFeedbacks();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Tem certeza que deseja excluir este feedback?')) {
      try {
        await axios.delete(`/api/feedbacks/${id}`);
        setFeedbacks(feedbacks.filter(feedback => feedback.id !== id));
      } catch (error) {
        console.error('Erro ao excluir feedback:', error.message); // Exiba a mensagem de erro
        setError('Erro ao excluir feedback. Tente novamente mais tarde.');
      }
    }
  };

  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4">Feedbacks</h3>
      {loading ? (
        <p>Carregando...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <table className="min-w-full bg-white border border-gray-300 rounded-lg">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Nome</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Mensagem</th>
              <th className="py-2 px-4 border-b">Ações</th>
            </tr>
          </thead>
          <tbody>
            {feedbacks.length > 0 ? (
              feedbacks.map((feedback) => (
                <tr key={feedback.id}>
                  <td className="py-2 px-4 border-b">{feedback.id}</td>
                  <td className="py-2 px-4 border-b">{feedback.name}</td>
                  <td className="py-2 px-4 border-b">{feedback.email}</td>
                  <td className="py-2 px-4 border-b">{feedback.message}</td>
                  <td className="py-2 px-4 border-b">
                    <button
                      onClick={() => handleDelete(feedback.id)}
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="py-2 px-4 text-center">Nenhum feedback encontrado</td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Feedbacks;
