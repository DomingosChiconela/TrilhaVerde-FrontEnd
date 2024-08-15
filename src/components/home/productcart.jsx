import React from "react";

export const ProductCard = ({
   price,
  category,
  weight,
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md m-4 w-screen sm:w-96 lg:w-1/3 overflow-hidden text-center">
    <img
        src="https://via.placeholder.com/300"
        alt="Placeholder"
        className="w-full h-48 object-cover"
    />
    <div className="p-4">
        <p className="text-gray-600 text-sm mb-1">{category}</p>
        <p className="text-gray-600 text-sm mb-1">Peso: {weight} kg</p>
        <p className="text-lg font-bold text-gray-800 mb-4">{price}</p>
        <div className="flex justify-center space-x-4 mt-4">
            <button className="px-4 py-2 border rounded-full bg-blue-500 text-white hover:bg-blue-600 transition duration-300">
                i
            </button>
            <button className="px-4 py-2 border rounded-lg bg-green-500 text-white hover:bg-green-600 transition duration-300">
                Requisitar
            </button>
        </div>
    </div>
</div>

  );
};
