
import React from 'react';
import Perfil from '../components/perfil/perfil';
import Header from '../components/header';
import { Footer } from '../components/footer';


export const Home = () => {
    return (
        <div>
            <Header/>

            <Perfil />
            <Footer/>
        </div>
    );
};


