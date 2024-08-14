import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!acceptTerms) {
      alert('Você deve aceitar os termos e condições para se registrar.');
      return;
    }
    if (password !== confirmPassword) {
      alert('As senhas não coincidem.');
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await axios.post('/user', {
        name,
        email,
        password,
      });
      console.log(response.data);

      setSuccessMessage('Cadastro realizado com sucesso.');
      setShowOptions(true);
      setTimeout(() => {
        navigate('/clientPage'); 
      }, 3000);

    } catch (error) {
      console.error('Erro ao registrar cliente', error);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        {!showOptions ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-2xl font-semibold text-green-800 text-center">Cadastro</h2>
            
            <label className="block">
              <span className="text-green-700">Nome:</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1 block w-full border-green-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
              />
            </label>

            <label className="block">
              <span className="text-green-700">Email:</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full border-green-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
              />
            </label>

            <label className="block">
              <span className="text-green-700">Senha:</span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 block w-full border-green-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
              />
            </label>

            <label className="block">
              <span className="text-green-700">Confirmar Senha:</span>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="mt-1 block w-full border-green-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
              />
            </label>

            <label className="block flex items-center">
              <input
                type="checkbox"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                required
                className="mr-2"
              />
              <span className="text-green-700">
                Aceito os <a href="/terms" className="text-green-600 hover:underline">termos e condições</a>
              </span>
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
