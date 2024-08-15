import React from 'react';

export const ProductCard = ({ imageUrl, name, description, location, price, category, weight }) => {
    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-md m-8 w-1/3 overflow-hidden text-center">
    <img src={imageUrl} alt={name} className="w-1/2
     h-48 object-cover" />
    <div className="p-6">
        <h2 className="text-2xl font-semibold mb-3">{name}</h2>
        <p className="text-gray-500 mb-3">{category}</p> 
        <p className="text-gray-500 mb-3">Peso: {weight} kg</p> 
        <p className="text-gray-700 mb-3">{description}</p>
        <p className="text-gray-500 mb-3">Localização: {location}</p>
        <p className="text-xl font-bold">{price}</p>
    </div>
</div>

    );
};
