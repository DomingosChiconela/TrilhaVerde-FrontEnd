import React, { useState } from 'react';
import axios from 'axios';

const calculateImagePath  = (imageName) => {
    console.log(imageName)
    if (imageName === "Plastico") return "https://images.newscientist.com/wp-content/uploads/2023/08/23172508/SEI_168561319.jpg"
    if (imageName === "Madeira") return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqGH2I13B44jJLjk90BVGG048CoUz_GiTTFg&s"
}

export const ProductCard = ({
   price,
   category,
   weight,
   residueName,
   imageUrl,
   quantity,
   postId 
}) => {
    const [showModal, setShowModal] = useState(false);

    const handleRequisitar = async () => {
        try {
          const response =   await axios.post(`/api/createRequest/`, { postId }); 
          console.log(response)
            setShowModal(true);
            setTimeout(() => setShowModal(false), 3000); 
        } catch (error) {
            console.error('Erro ao fazer a requisição:', error);
        }
    };

    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-md m-4 w-screen sm:w-96 lg:w-1/3 overflow-hidden text-center">
            <img
                src={calculateImagePath(residueName)}
                alt="Placeholder"
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <p className="text-gray-600 text-sm mb-1">{category}</p>
                <p className="text-gray-600 text-sm mb-1">quantidade {quantity} kg</p>
                <p className="text-lg font-bold text-gray-800 mb-4">{price}</p>
                <div className="flex justify-center space-x-4 mt-4">
                    <button className="px-4 py-2 border rounded-full bg-blue-500 text-white hover:bg-blue-600 transition duration-300">
                        i
                    </button>
                    <a href={'https://wa.me//+351933833443?text=Tenho%20interesse%20em%20comprar%20' +residueName}>
                    <button
                        className="px-4 py-2 border rounded-lg bg-green-500 text-white hover:bg-green-600 transition duration-300"
                        // onClick={handleRequisitar}
                    >
                        Requisitar
                    </button>

                    </a>
                </div>
            </div>

            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-white p-4 border border-gray-300 rounded shadow-md">
                        <p className="text-lg font-bold text-green-600">Requisição feita com sucesso!</p>
                    </div>
                </div>
            )}
        </div>
    );
};