import React, { useState } from "react";

const CreateAdPage = () => {
  const [formData, setFormData] = useState({
    image: null,
    name: "",
    description: "",
    location: "",
    price: "",
    category: "",
    weight: "",
  });

  const [error, setError] = useState("");
  
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image" && files[0]) {
      const file = files[0];
      const validImageTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
      
      if (!validImageTypes.includes(file.type)) {
        setError("Por favor, selecione um arquivo de imagem válido.");
        setFormData({ ...formData, image: null });
        return;
      }

      setError("");
      setFormData({ ...formData, image: URL.createObjectURL(file) });
    } else {
      setFormData({ ...formData, [name]: value });
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Ad Created:", formData);
  };

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Criar Novo Anúncio</h1>

      <form onSubmit={handleSubmit} className=" shadow-md rounded-lg p-6">
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2">Nome</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
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
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2">Categoria</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2">Quantidade</label>
          <input
            type="text"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2">Imagem</label>
          <input
            type="file"
            name="image"
            onChange={handleChange}
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
        
        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Criar Anúncio
        </button>
      </form>
    </div>
  );
};

export default CreateAdPage;
