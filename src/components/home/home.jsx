import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductCard } from '../home/productcart'; 
import Header from '../header';
import { httpClient } from '../../axios/axios';

const HomePage = () => {
    const navigate = useNavigate(); 
   const [post, SetPost]=  useState([])

const config ={ headers :{Authorization :`Bearer ${localStorage.getItem('token')}`}
    }
  useEffect( ()=>{

    
    httpClient.get(`/api/post/`,config).then((res)=>{
      console.log(res.data)
      SetPost(res.data.data)

    }).catch((error)=>{
        console.log(error)
    })

   },[])

    

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
        {post.map((product, index) => (
       
            <ProductCard
                key={index}
                imageUrl={product.image}
                name={product.name}
                description={product.description}
                location={product.location}
                price={product.price}
                category={product.category}
                quantity={product.quantity}
                postId = {product.id}

                
            />
        ))}
    </main>
</div>

    );
};

export default HomePage;
