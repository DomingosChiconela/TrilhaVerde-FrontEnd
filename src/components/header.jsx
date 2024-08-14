import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from 'axios'; 
import { User } from 'phosphor-react'; 
const Header = ({ userType }) => {
 
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const api = axios.create({
    baseURL: 'http://localhost:5000', // Substitua pela URL base real
  });

  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  
  const handleProfileClick = () => {
    navigate('/admin'); 
  };

  
  if (userType === "users" || userType === "admin") {
    return null;
  }

  return (


    
    <nav className="bg-white text-black py-4 flex justify-between  ">
      <div className="container mx-auto flex  items-center px-4">
        <div className="flex items-center">
          <div className="border-2 border-gray-300 rounded-lg px-2 flex items-center">
            <h1 className="text-2xl font-bold px-4 py-2 transition-all duration-300 ease-in-out transform hover:text-blue-500 hover:scale-105 glow-effect">
              Trilha
            </h1>
          </div>
        </div>

        <div className="hidden md:flex flex-grow justify-center items-center">
         
        </div>

        <div className="flex items-center"> <NavLink
            to="/admin"
            className={({ isActive }) => `mr-4 text-lg transition-all duration-300 ease-in-out transform ${isActive ? 'text-blue-950' : 'hover:text-blue-500 hover:scale-105'} glow-effect`}
          >
            Admin
          </NavLink>
          <NavLink
            to="/signup"
            className={({ isActive }) => `mr-4 text-lg transition-all duration-300 ease-in-out transform ${isActive ? 'text-blue-950' : 'hover:text-blue-500 hover:scale-105'} glow-effect`}
          >
            Signup
          </NavLink>
          <NavLink
            to="/perfil"
            className={({ isActive }) => `mr-4 text-lg transition-all duration-300 ease-in-out transform ${isActive ? 'text-blue-950' : 'hover:text-blue-500 hover:scale-105'} glow-effect`}
          >
              Perfil
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) => `mr-4 text-lg transition-all duration-300 ease-in-out transform ${isActive ? 'text-blue-950' : 'hover:text-blue-500 hover:scale-105'} glow-effect`}
          >
            Login
          </NavLink>
          <div className="hidden md:block ml-4">
            
            <button
              onClick={handleProfileClick}
              className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg flex items-center"
            >
              <User size={24} />
            </button>
          </div>

          {/* <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none hover:text-green-950 font-bold"
            >
              Menu
            </button>
          </div> */}
        </div>
      </div>

      {/* {isMenuOpen && (
        <div className="md:hidden bg-blue-600 text-white py-2 px-4">
          <div className="flex flex-col gap-2">
            <NavLink
              to="/admin"
              className={({ isActive }) => `mr-4 text-lg transition-all duration-300 ease-in-out transform ${isActive ? 'text-blue-950' : 'hover:text-blue-500 hover:scale-105'} glow-effect`}
            >
              Admin
            </NavLink>
            <NavLink
            to="/signup"
            className={({ isActive }) => `mr-4 text-lg transition-all duration-300 ease-in-out transform ${isActive ? 'text-blue-950' : 'hover:text-blue-500 hover:scale-105'} glow-effect`}
          >
            Signup
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) => `mr-4 text-lg transition-all duration-300 ease-in-out transform ${isActive ? 'text-blue-950' : 'hover:text-blue-500 hover:scale-105'} glow-effect`}
          >
            Login
          </NavLink>
            </div>
          </div>
        
      )} */}
    </nav>
  );
};

export default Header;
