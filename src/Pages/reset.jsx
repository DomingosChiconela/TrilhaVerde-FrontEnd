import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

export const ResetPassword = () => {
  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm();
  const { token } = useParams();
  const navigate = useNavigate();
  const [message, setMessage] = React.useState('');

  const onSubmit = async (data) => {
    if (data.newPassword !== data.confirmPassword) {
      setMessage('As senhas não coincidem.');
      return;
    }

    try {
      const response = await axios.post('/auth/reset-password', {
        resetCode: data.resetCode,
        newPassword: data.newPassword,
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
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-gray-700 text-center">Redefinir Senha</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          {message && <p className={`mb-4 ${message.includes('Erro') ? 'text-red-500' : 'text-green-500'}`}>{message}</p>}

          <label className="block mb-4">
            <span className="text-gray-700">Código de Redefinição:</span>
            <input
              type="text"
              {...register('resetCode', { required: 'Código de redefinição é obrigatório' })}
              className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm ${errors.resetCode ? 'border-red-500' : ''}`}
            />
            {errors.resetCode && <p className="text-red-500">{errors.resetCode.message}</p>}
          </label>

          <label className="block mb-4">
            <span className="text-gray-700">Nova Senha:</span>
            <input
              type="password"
              {...register('newPassword', { required: 'Nova senha é obrigatória' })}
              className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm ${errors.newPassword ? 'border-red-500' : ''}`}
            />
            {errors.newPassword && <p className="text-red-500">{errors.newPassword.message}</p>}
          </label>

          <label className="block mb-6">
            <span className="text-gray-700">Confirmar Senha:</span>
            <input
              type="password"
              {...register('confirmPassword', { required: 'Confirmação de senha é obrigatória' })}
              className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm ${errors.confirmPassword ? 'border-red-500' : ''}`}
            />
            {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
          </label>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
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
