
import React from 'react';

export const ProductCard = ({ image, name, description, location, price, category, weight }) => {
    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-md m-4 w-64 overflow-hidden text-center">
            <img src={image || 'https://via.placeholder.com/300'} alt={name} className="w-full h-40 object-cover" />
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{name}</h2>
                <p className="text-gray-500 mb-2">{category}</p> 
                <p className="text-gray-500 mb-2">Peso: {weight} kg</p> 
                <p className="text-gray-700 mb-2">{description}</p>
                <p className="text-gray-500 mb-2">Localização: {location}</p>
                <p className="text-lg font-bold">{price}</p>
            </div>
        </div>
    );
};
