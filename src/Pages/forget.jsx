import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { httpClient } from '../axios/axios';

export const ForgotPassword = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  const [message, setMessage] = React.useState('');

  const onSubmit = async (data) => {
    setMessage('');

    try {
      const response = await httpClient.post("/api/user/forgotPassword", data);
      if (response.status === 200) {
        setMessage('Um e-mail com instruções para redefinir sua senha foi enviado.');
      } else {
        setMessage('Ocorreu um erro. Verifique se o e-mail está correto.');
      }
    } catch (error) {
      console.error('Erro ao enviar solicitação de recuperação de senha', error);
      setMessage('Erro ao enviar solicitação. Tente novamente mais tarde.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-gray-700 text-center">Esqueceu a Senha?</h2>
        
        <form onSubmit={handleSubmit(onSubmit)}>
          {message && <p className={`mb-4 ${message.includes('Erro') ? 'text-red-500' : 'text-green-500'}`}>{message}</p>}
          
          <label className="block mb-4">
            <span className="text-gray-700">Email:</span>
            <input
              type="email"
              {...register('email', { required: 'O email é obrigatório' })}
              className={`mt-1 block w-full border-2 ${errors.email ? 'border-red-500' : 'border-black'} rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm`}
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </label>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
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
