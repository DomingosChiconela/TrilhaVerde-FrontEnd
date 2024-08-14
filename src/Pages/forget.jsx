import React, { useState } from 'react';
import axios from 'axios';

export const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post('/auth/forgot-password', { email });
      if (response.data.success) {
        setMessage('Um e-mail com instruções para redefinir sua senha foi enviado.');
      } else {
        setMessage('Ocorreu um erro. Verifique se o e-mail está correto.');
      }
    } catch (error) {
      console.error('Erro ao enviar solicitação de recuperação de senha', error);
      setMessage('Erro ao enviar solicitação. Tente novamente mais tarde.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-gray-700 text-center">Esqueceu a Senha?</h2>
        
        <form onSubmit={handleSubmit}>
          {message && <p className={`mb-4 ${message.includes('Erro') ? 'text-red-500' : 'text-green-500'}`}>{message}</p>}
          
          <label className="block mb-4">
            <span className="text-gray-700">Email:</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </label>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? 'Enviando...' : 'Enviar Solicitação'}
          </button>
        </form>

        <p className="mt-4 text-center">
          Lembrei da minha senha. <a href="/login" className="text-blue-600 hover:underline">Voltar ao Login</a>
        </p>
      </div>
    </div>
  );
};
