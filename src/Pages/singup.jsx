import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Signup = () => {
  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm();
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = React.useState('');
  const [showOptions, setShowOptions] = React.useState(false);

  const onSubmit = async (data) => {
    if (!data.acceptTerms) {
      alert('Você deve aceitar os termos e condições para se registrar.');
      return;
    }

    

    try {
      const response = await axios.post('/user', {
        name: data.name,
        email: data.email,
        password: data.password,
      });
      console.log(response.data);

      setSuccessMessage('Cadastro realizado com sucesso.');
      setShowOptions(true);
      setTimeout(() => {
        navigate('/login'); 
      }, 3000);

    } catch (error) {
      console.error('Erro ao registrar cliente', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        {!showOptions ? (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <h2 className="text-2xl font-semibold text-green-800 text-center">Cadastro</h2>

            <label className="block">
              <span className="text-green-700">Nome:</span>
              <input
                type="text"
                {...register('name', { required: 'Nome é obrigatório' })}
                className={`mt-1 block w-full border-green-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm ${errors.name ? 'border-red-500' : ''}`}
              />
              {errors.name && <p className="text-red-500">{errors.name.message}</p>}
            </label>

            <label className="block">
              <span className="text-green-700">Email:</span>
              <input
                type="email"
                {...register('email', { required: 'Email é obrigatório' })}
                className={`mt-1 block w-full border-green-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm ${errors.email ? 'border-red-500' : ''}`}
              />
              {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            </label>

            <label className="block">
              <span className="text-green-700">Senha:</span>
              <input
                type="password"
                {...register('password', { required: 'Senha é obrigatória' })}
                className={`mt-1 block w-full border-green-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm ${errors.password ? 'border-red-500' : ''}`}
              />
              {errors.password && <p className="text-red-500">{errors.password.message}</p>}
            </label>

            <label className="block">
              <span className="text-green-700">Confirmar Senha:</span>
              <input
                type="password"
                {...register('confirmPassword', { required: 'Confirmação de senha é obrigatória' })}
                className={`mt-1 block w-full border-green-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm ${errors.confirmPassword ? 'border-red-500' : ''}`}
              />
              {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
            </label>

            <label className="block flex items-center">
              <input
                type="checkbox"
                {...register('acceptTerms', { required: 'Você deve aceitar os termos e condições' })}
                className="mr-2"
              />
              <span className="text-green-700">
                Aceito os <a href="/terms" className="text-green-600 hover:underline">termos e condições</a>
              </span>
              {errors.acceptTerms && <p className="text-red-500">{errors.acceptTerms.message}</p>}
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Registrando...' : 'Registrar'}
            </button>

            <p className="mt-4 text-center">
              Já tem uma conta? <a href="/login" className="text-green-600 hover:underline">Inicie sessão</a>
            </p>
          </form>
        ) : (
          <div className="bg-green-50 text-green-900 p-6 rounded-lg shadow-md text-center">
            <p>{successMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
};
