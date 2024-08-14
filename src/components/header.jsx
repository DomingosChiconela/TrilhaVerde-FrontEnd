import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { User } from 'phosphor-react';

const Header = ({ userType }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleProfileClick = () => {
    navigate('/admin');
  };

  if (userType === 'users' || userType === 'admin') {
    return null;
  }

  return (
    
    <nav className="bg-white text-black py-4 flex justify-between items-center">
      <div className="container mx-auto flex items-center px-4">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold px-4 py-2 transition-all duration-300 ease-in-out transform hover:text-blue-500 hover:scale-105">
            Trilha
          </h1>
        </div>

        <div className="hidden md:flex flex-grow justify-center items-center">
          <NavLink
            to="/admin"
            className={({ isActive }) =>
              `mr-4 text-lg transition-all duration-300 ease-in-out transform ${isActive ? 'text-blue-950' : 'hover:text-blue-500 hover:scale-105'}`
            }
          >
            Admin
          </NavLink>
          <NavLink
            to="/signup"
            className={({ isActive }) =>
              `mr-4 text-lg transition-all duration-300 ease-in-out transform ${isActive ? 'text-blue-950' : 'hover:text-blue-500 hover:scale-105'}`
            }
          >
            Signup
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `mr-4 text-lg transition-all duration-300 ease-in-out transform ${isActive ? 'text-blue-950' : 'hover:text-blue-500 hover:scale-105'}`
            }
          >
            Login
          </NavLink>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={handleProfileClick}
            className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg flex items-center md:hidden"
          >
            <User size={24} />
          </button>

          <button
            onClick={toggleMenu}
            className="md:hidden text-black focus:outline-none hover:text-blue-500 font-bold"
          >
            Menu
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-blue-600 text-white py-2 px-4">
          <div className="flex flex-col gap-2">
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                `block text-lg transition-all duration-300 ease-in-out transform ${isActive ? 'text-blue-950' : 'hover:text-blue-500 hover:scale-105'}`
              }
            >
              Admin
            </NavLink>
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                `block text-lg transition-all duration-300 ease-in-out transform ${isActive ? 'text-blue-950' : 'hover:text-blue-500 hover:scale-105'}`
              }
            >
              Signup
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `block text-lg transition-all duration-300 ease-in-out transform ${isActive ? 'text-blue-950' : 'hover:text-blue-500 hover:scale-105'}`
              }
            >
              Login
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
