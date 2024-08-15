import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { httpClient } from '../axios/axios';


export const Login = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  const [errorMessage, setErrorMessage] = React.useState('');
  const [successMessage, setSuccessMessage] = React.useState('');
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const response = await httpClient.post('/api/auth/login', data);
      if (response.status === 200) {
        setToken(response.data.token);
        setRole(response.data.role); 
        setSuccessMessage('Login realizado com sucesso.');
        navigate("/"); 
      } 
    } catch (error) {
      console.error('Erro ao fazer login', error);
      setErrorMessage('Erro ao fazer login. Tente novamente mais tarde.');
    }
  };
  return (
    <div className="min-h-screen flex flex-col bg-green-100 p-4">
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 text-center">Login</h2>
          
          <form onSubmit={handleSubmit(onSubmit)}>
            {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}
            {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
            
            <label className="block mb-4">
              <span className="text-black">Email:</span>
              <input
                type="email"
                {...register('email', { required: 'O email é obrigatório' })}
                className={`mt-1 block w-full border-2 ${errors.email ? 'border-red-500' : 'border-black'} rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm`}
              />
              {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            </label>

            <label className="block mb-4">
              <span className="text-black">Senha:</span>
              <input
                type="password"
                {...register('password', { required: 'A senha é obrigatória' })}
                className={`mt-1 block w-full border-2 ${errors.password ? 'border-red-500' : 'border-black'} rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm`}
              />
              {errors.password && <p className="text-red-500">{errors.password.message}</p>}
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Entrando...' : 'Entrar'}
            </button>
          </form>

          <p className="mt-4 text-center">
            Não tem uma conta? <a href="/signup" className="text-blue-600 hover:underline">Crie uma aqui</a>
          </p>
        </div>
      </div>
    </div>
  );
};
