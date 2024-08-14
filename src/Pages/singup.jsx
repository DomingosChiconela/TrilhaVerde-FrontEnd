import React, { useState } from 'react';

export const ClientRegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!acceptTerms) {
      alert('Você deve aceitar os termos e condições para se registrar.');
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await axios.post('/user', {
        name,
        password,
        email,
        confirmpassword,
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
    <>
    
      <div className="container mx-auto p-4">
        {!showOptions ? (
          <form onSubmit={handleSubmit} className="bg-red-50 p-6 rounded-lg shadow-md max-w-md mx-auto">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">USER REGISTRATION</h2>
            <label className="block mb-4">
              <span className="text-blue-700">Name:</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1 block w-full border-blue-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </label>
            <label className="block mb-4">
              <span className="text-blue-700">email:</span>
              <input
                type="text"
                value={email}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="mt-1 block w-full border-blue-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </label>
            <label className="block mb-4">
              <span className="text-blue-700">password:</span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 block w-full border-blue-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </label>

            <label className="block mb-4 flex items-center">

              <input
                type="checkbox"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                required
                className="mr-2"
              />
              <span className="text-blue-700">
                Aceito os <a href="/terms" className="text-blue-600 hover:underline">termos e condições</a>
              </span>
            </label>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Registrando...' : 'Registrar'}
            </button>
            <p className="mt-4 text-center">
              Já tem uma conta? <a href="/login" className="text-blue-600 hover:underline">Inicie sessão</a>
            </p>
          </form>
        ) : (
          <div className="bg-blue-50 text-blue-900 p-6 rounded-lg shadow-md max-w-md mx-auto">
           
          </div>
        )}
      </div>
      
    </>
  );
};
