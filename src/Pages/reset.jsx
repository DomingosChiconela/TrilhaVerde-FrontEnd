import React, { useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

export const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [resetCode, setResetCode] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const { token } = useParams(); 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (newPassword !== confirmPassword) {
      setMessage('As senhas não coincidem.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await axios.post('/auth/reset-password', {
        resetCode,
        newPassword,
        token, 
      });

      if (response.data.success) {
        setMessage('Senha redefinida com sucesso. Você será redirecionado para a página de login.');
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else {
        setMessage('Ocorreu um erro. Verifique o código e tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao redefinir a senha', error);
      setMessage('Erro ao redefinir a senha. Tente novamente mais tarde.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-gray-700 text-center">Redefinir Senha</h2>

        <form onSubmit={handleSubmit}>
          {message && <p className={`mb-4 ${message.includes('Erro') ? 'text-red-500' : 'text-green-500'}`}>{message}</p>}
          
          <label className="block mb-4">
            <span className="text-gray-700">Código de Redefinição:</span>
            <input
              type="text"
              value={resetCode}
              onChange={(e) => setResetCode(e.target.value)}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </label>

          <label className="block mb-4">
            <span className="text-gray-700">Nova Senha:</span>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </label>

         

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? 'Redefinindo...' : 'Redefinir Senha'}
          </button>
        </form>

        <p className="mt-4 text-center">
          Voltar ao <a href="/login" className="text-blue-600 hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
};
