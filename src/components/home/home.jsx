import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductCard } from '../home/productcart'; 
import Header from '../header';

const HomePage = () => {
    const navigate = useNavigate(); 
    const products = [
        {
            imageUrl: '',
            name: 'Nome do Produto 1',
            description: 'Descrição do Produto 1',
            location: 'Cidade, Estado',
            price: '99,99MT',
            category: 'Categoria 1',
            weight: '1.5'
        },
        {
            imageUrl: '',
            name: 'Nome do Produto 2',
            description: 'Descrição do Produto 2',
            location: 'Cidade, Estado',
            price: '149,99MT',
            category: 'Categoria 2',
            weight: '2.0'
        },
    ];

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
    <Header />
    <div className="flex justify-center mt-6 mb-4">
        <button
            className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            onClick={() => navigate('/create-ad')}
        >
            Criar Novo Anúncio
        </button>
    </div>

    <main className="flex flex-wrap justify-center py-4 w-full max-w-screen-lg mx-auto">
        {products.map((product, index) => (
            <ProductCard
                key={index}
                imageUrl={product.image}
                name={product.name}
                description={product.description}
                location={product.location}
                price={product.price}
                category={product.category}
                weight={product.weight}
            />
        ))}
    </main>
</div>

    );
};

export default HomePage;
