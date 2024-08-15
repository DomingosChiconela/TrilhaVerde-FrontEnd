import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { httpClient } from "../../axios/axios"; // Certifique-se de que o caminho está correto

export const CreateAdPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [imagePreview, setImagePreview] = useState(null);
  const [error, setError] = useState("");

  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
  };

  const onSubmit = async(data) => {
    console.log(data);

    try {
      const response = await httpClient.post("/api/post/", data, config);
      console.log(response);
    } catch (error) {
      console.log(error);
      console.log("deu erro");
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const validImageTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
    
    if (file && validImageTypes.includes(file.type)) {
      setImagePreview(URL.createObjectURL(file));
      setError("");
    } else {
      setError("Por favor, selecione um arquivo de imagem válido.");
      setImagePreview(null);
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Criar Novo Anúncio</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="shadow-md rounded-lg p-6">
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2">Descrição</label>
          <textarea
            {...register("description", { required: "Este campo é obrigatório." })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          {errors.description && <p className="text-red-500 mt-2">{errors.description.message}</p>}
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2">Localização</label>
          <input
            type="text"
            {...register("location", { required: "Este campo é obrigatório." })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.location && <p className="text-red-500 mt-2">{errors.location.message}</p>}
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2">Preço</label>
          <input
            type="number"
            {...register("price", { required: "Este campo é obrigatório." })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.price && <p className="text-red-500 mt-2">{errors.price.message}</p>}
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2">Categoria</label>
          <select
            {...register("category", { required: "Este campo é obrigatório." })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Selecione uma categoria</option>
            <option value="0d481d8f-d92f-4cd5-b1d2-8da1806cbb1b">Metal</option>
            <option value="40302c1e-458e-4765-8df6-0c3db7db86a1">Plástico</option>
            <option value="1b5def53-97eb-4540-a071-e7e379664ce7">Papel</option>
            <option value="1b5def53-97eb-4540-a071-e7e379664ce7">Madeira</option>
          </select>
          {errors.category && <p className="text-red-500 mt-2">{errors.category.message}</p>}
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2">Quantidade</label>
          <input
            type="number"
            {...register("quantity", { required: "Este campo é obrigatório." })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.quantity && <p className="text-red-500 mt-2">{errors.quantity.message}</p>}
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
