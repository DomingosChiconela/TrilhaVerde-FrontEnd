import { Plus, X } from '@phosphor-icons/react'; 
import React, { useState } from 'react';

const Residuos = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({ username: '', email: '' });

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
       
        console.log('Dados do formulário:', formData);
        closeModal(); 
    };

    return (
        <div className="">
            <main className="mt-6">
                <button
                    onClick={openModal}
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 flex items-center"
                >
                    <Plus size={32} />
                    
                </button>

                <div className="mt-6">
                    <h2 className="text-xl font-semibold">Lista de Resíduos</h2>
                    <ul className="mt-4 bg-white p-4 rounded shadow-md">
                        <li className="py-2 border-b">Resíduo 1</li>
                        <li className="py-2 border-b">Resíduo 2</li>
                        <li className="py-2">Resíduo 3</li>
                    </ul>
                </div>
            </main>

            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
                    <div className="bg-white p-6 rounded shadow-lg w-1/3 relative">
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                        >
                            <X size={24} />
                        </button>
                        <h2 className="text-xl mb-4">Adicionar Usuário</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                                    Nome:
                                </label>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email:
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                            >
                                Adicionar
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Residuos;
