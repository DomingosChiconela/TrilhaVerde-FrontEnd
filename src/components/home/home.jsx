import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductCard } from '../home/productcart';
import Header from '../header';

const HomePage = () => {
    const navigate = useNavigate(); 
    const products = [
        {
            image: 'https://example.com/images/imagem1.jpg',
            name: 'Nome do Produto 1',
            description: 'Descrição do Produto 1',
            location: 'Cidade, Estado',
            price: 'R$99,99',
            category: 'Categoria 1',
            weight: '1.5'
        },
        {
            image: '',
            name: 'Nome do Produto 2',
            description: 'Descrição do Produto 2',
            location: 'Cidade, Estado',
            price: 'R$149,99',
            category: 'Categoria 2',
            weight: '2.0'
        },
    ];

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
             <Header />
            <div className="mt-6">
                <button
                    className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onClick={() => navigate('/create-ad')} 
                >
                    Criar novo Anúncio
                </button>
            </div>

            <main className="flex flex-wrap justify-center py-2 w-full max-w-screen-lg mt-4">
                {products.map((product, index) => (
                    <ProductCard
                        key={index}
                        image={product.image}
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
