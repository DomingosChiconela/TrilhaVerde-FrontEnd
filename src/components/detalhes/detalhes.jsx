import React, { useState } from 'react';

const CreateAdPage = () => {
    const [formData, setFormData] = useState({
        image: '',
        name: '',
        description: '',
        location: '',
        price: '',
        category: '',
        weight: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Ad Created:', formData);
           };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Criar Novo Anúncio</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    
                    <input
                        type="file"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Nome</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Descrição</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Localização</label>
                    <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Preço</label>
                    <input
                        type="text"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Categoria</label>
                    <input
                        type="text"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Peso</label>
                    <input
                        type="text"
                        name="weight"
                        value={formData.weight}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Criar Anúncio
                </button>
            </form>
        </div>
    );
};

export default CreateAdPage;
