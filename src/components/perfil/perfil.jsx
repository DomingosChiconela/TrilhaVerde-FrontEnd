import  { useState, useEffect } from 'react';
import Dashboard from '../dasboarduser';
import Header from '../header';
import { Footer } from '../footer';

const fetchProfileData = () => {
  return {
    nome: localStorage.getItem('nome') || 'Seu Nome',
    regiao: localStorage.getItem('regiao') || 'Sua Região',
    foto: localStorage.getItem('foto') || '',
    vendas: JSON.parse(localStorage.getItem('vendas')) || {
      papel: 10, 
      madeira: 15, 
      vidro: 5,
      plastico: 7,
      metal: 12,
    },
  };
};

const updateProfileData = (data) => {
  localStorage.setItem('nome', data.nome);
  localStorage.setItem('regiao', data.regiao);
  localStorage.setItem('foto', data.foto);
  localStorage.setItem('vendas', JSON.stringify(data.vendas));
};

const Perfil = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [nome, setNome] = useState('');
  const [regiao, setRegiao] = useState('');
  const [foto, setFoto] = useState('');
  const [isVendasOpen, setIsVendasOpen] = useState(false);
  const [vendas, setVendas] = useState({
    papel: 10,
    madeira: 15,
    vidro: 5,
    plastico: 7,
    metal: 12,
  });

  useEffect(() => {
    const data = fetchProfileData();
    setNome(data.nome);
    setRegiao(data.regiao);
    setFoto(data.foto);
    setVendas(data.vendas);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setVendas((prevVendas) => ({
        papel: prevVendas.papel + Math.floor(Math.random() * 10),
        madeira: prevVendas.madeira + Math.floor(Math.random() * 10),
        vidro: prevVendas.vidro + Math.floor(Math.random() * 10),
        plastico: prevVendas.plastico + Math.floor(Math.random() * 10),
        metal: prevVendas.metal + Math.floor(Math.random() * 10),
      }));
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const handleEdit = () => {
    setIsModalOpen(true);
  };

  const handleSave = () => {
    const data = { nome, regiao, foto, vendas };
    updateProfileData(data);
    setIsModalOpen(false);
  };

  const handleVendas = () => {
    setIsVendasOpen(!isVendasOpen);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
    <Header/>
    <div className="p-4 bg-green-100">

      <div className="flex flex-col items-center mb-4">
        <img
          src={foto || 'https://lwlies.com/wp-content/uploads/2017/04/avatar-2009.jpg'}
          alt="Foto de Perfil"
          className="w-48 h-48 rounded-full border border-gray-300 mb-4"
        />
        <span className="text-xl font-semibold border border-gray-300 px-4 py-2 rounded-md">
          {nome}
        </span>
        <span className="text-lg text-gray-600 border border-gray-300 px-4 py-1 mt-2 rounded-md">
          {regiao}
        </span>
        <button
          onClick={handleEdit}
          className="px-36 py-2 bg-sky-700 text-white rounded-3xl hover:bg-blue-600 mt-2"
        >
          Editar perfil
        </button>
        <button
          onClick={handleVendas}
          className="px-36 py-2 bg-green-500 text-white rounded-3xl hover:bg-green-600 mt-2"
        >
          Histórico
        </button>
      </div>

      {isVendasOpen && (
        <div
          className={`fixed top-0 right-0 h-full w-full max-w-screen-lg bg-white border-l border-gray-300 shadow-lg transition-transform duration-300 ease-in-out ${
            isVendasOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Dados de Vendas</h2>
              <button
                onClick={handleVendas}
                className="px-12 py-2 bg-red-500 text-white rounded-2xl hover:bg-red-600"
              >
                Fechar
              </button>
            </div>
            <div className="grid grid-cols-5 gap-4 mb-4">
              {Object.entries(vendas).map(([categoria, valor]) => (
                <div
                  key={categoria}
                  className="p-4 border border-gray-300 rounded-lg shadow-md flex flex-col items-center"
                >
                  <h3 className="text-lg font-semibold capitalize">{categoria}</h3>
                  <p className="text-xl font-bold mt-2">{valor}</p>
                </div>
              ))}
            </div>
            <Dashboard vendas={vendas} />
          </div>
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-80">
            <h2 className="text-lg font-bold text-black text-center mb-4">
              Editar Perfil
            </h2>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="foto"
                  className="block text-sm font-medium text-black"
                >
                  Foto:
                </label>
                <input
                  type="file"
                  id="foto"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="mt-1 block w-full"
                />
                {foto && (
                  <img
                    src={foto}
                    alt="Pré-visualização"
                    className="mt-2 w-24 h-24 rounded-full border border-gray-300"
                  />
                )}
              </div>
              <div>
                <label
                  htmlFor="nome"
                  className="block text-sm font-medium text-black text-center"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="mt-1 block w-full rounded-xl py-2 bg-transparent text-black text-center border-zinc-700 shadow-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="regiao"
                  className="block text-sm font-medium text-center text-black"
                >
                  Região
                </label>
                <input
                  type="text"
                  id="regiao"
                  value={regiao}
                  onChange={(e) => setRegiao(e.target.value)}
                  className="mt-1 block w-full rounded-xl py-2 bg-transparent text-black text-center border-zinc-700 shadow-sm"
                />
              </div>
            </div>
            <div className="mt-4 flex justify-end space-x-2">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-9 py-1 bg-red-600 text-white rounded-3xl hover:bg-rose-950"
              >
                Cancelar
              </button>
              <button
                onClick={handleSave}
                className="px-10 py-1 bg-green-600 text-white rounded-3xl hover:bg-cyan-600"
              >
                Salvar
              </button>
            </div>
          </div>
         
        </div>
      )}
    </div>
    <Footer/>
    </div>
  );
};

export default Perfil;
