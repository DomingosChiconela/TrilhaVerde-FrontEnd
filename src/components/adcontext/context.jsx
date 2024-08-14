import React, { createContext, useState, useContext } from 'react';

const AdContext = createContext();

export const AdProvider = ({ children }) => {
    const [ads, setAds] = useState([]);

    const addAd = (ad) => {
        setAds([...ads, ad]);
    };

    return (
        <AdContext.Provider value={{ ads, addAd }}>
            {children}
        </AdContext.Provider>
    );
};

export const useAds = () => {
    const context = useContext(AdContext);
    if (!context) {
        throw new Error('useAds must be used within an AdProvider');
    }
    return context;
};
