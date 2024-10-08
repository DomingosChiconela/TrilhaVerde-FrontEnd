import React, { useState } from "react";
import axios from 'axios';
import { httpClient } from "../../axios/axios";

const CreateAdPage = () => {
  const [formData, setFormData] = useState({
    image: null,
    name: "",
    description: "",
    location: "",
    price: "",
    category: "",
    quantity: '1'
  });

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      handleImageChange(e);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const validImageTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
    
    if (file && validImageTypes.includes(file.type)) {
      setFormData({ ...formData, image: URL.createObjectURL(file) });
      setError("");
    } else {
      setError("Por favor, selecione um arquivo de imagem válido.");
      setFormData({ ...formData, image: null });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    };

    console.log(formData)
    try {
      const response = await httpClient.post('/api/post/', formData, config);
      if (response.status === 201) {
        setSuccessMessage('Anúncio criado com sucesso!');
        setTimeout(() => {
          window.location.href = "/"; // Redireciona para a página inicial após 2 segundos
        }, 2000);
      }
    } catch (error) {
      console.error("Erro ao criar o anúncio:", error);
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Criar Novo Anúncio</h1>

      <form onSubmit={handleSubmit} className="shadow-md rounded-lg p-6">
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2">Localização</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2">Preço</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2">Categoria</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>Selecione uma categoria</option>
            <option value="0d481d8f-d92f-4cd5-b1d2-8da1806cbb1b">Metal</option>
            <option value="40302c1e-458e-4765-8df6-0c3db7db86a1">Plástico</option>
            <option value="e2ce95e9-6597-4d33-85a5-7860deab4cae">Papel</option>
            <option value="1b5def53-97eb-4540-a071-e7e379664ce7">Madeira</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2">Descrição</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2">Imagem</label>
          <input
            type="file"
            name="image"
            className="w-full p-3 border border-gray-300 rounded-lg"
            accept="image/jpeg, image/png, image/gif, image/webp"
          />
          {formData.image && (
            <div className="mt-4">
              <img src={formData.image} alt="Pré-visualização" className="max-w-full h-auto rounded-lg shadow-md" />
            </div>
          )}
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Criar Anúncio
          </button>
        </div>

        {successMessage && <p className="text-green-500 mt-4 text-center">{successMessage}</p>}
      </form>
    </div>
  );
};

export {CreateAdPage};