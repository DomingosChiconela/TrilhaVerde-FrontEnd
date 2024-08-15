import React, { useState } from "react";

const CreateAdPage = () => {
  const [formData, setFormData] = useState({
    image: null,
    name: "",
    description: "",
    location: "",
    price: "",
    category: "",
    category: "",
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

  const handleSubmit =  async(e) => {
    e.preventDefault();
    console.log("Ad Created:", formData);
    try{
  const response = await axios.post('/api/post/', formData, config);
        if (response.status === 201) {
          setSuccessMessage('Anúncio criado com sucesso!');
          setTimeout(() => {
            navigate("/"); 
          }, 2000);
        }


    }catch(error){
      console.log(error)
    }
    
  };

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Criar Novo Anúncio</h1>

      <form onSubmit={handleSubmit} className=" shadow-md rounded-lg p-6">
        
       
        
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
  <select
    name="category"
    value={formData.category}
    onChange={handleChange}
    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
  >
    <option value="" disabled>Selecione uma categoria</option>
    <option value="0d481d8f-d92f-4cd5-b1d2-8da1806cbb1b">Metal</option>
    <option value="40302c1e-458e-4765-8df6-0c3db7db86a1">Plastico</option>
    <option value="e2ce95e9-6597-4d33-85a5-7860deab4cae">Papel</option>
    <option value="1b5def53-97eb-4540-a071-e7e379664ce7">Madeira</option>
   
    
  </select>
</div>

        
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2">Quantidade</label>
          <input
            type="text"
            name="category"
            value={formData.category}
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
        <div className="flex justify-center">
          <button 
          type="submit"
          className="bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 m-auto"
        >
          Criar Anúncio
        </button>
        </div>
        
      </form>
    </div>
  );
};

export default CreateAdPage;
