import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from 'axios'; 
import { useAuth } from "../Contexts/AuthContext";

const Header = ({ userType }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleProfileClick = () => {
    navigate('/admin'); 
  };

  // Se o userType for "users" ou "admin", o Header não deve ser renderizado
  if (userType === "users" || userType === "admin") {
    return null;
  }

  return (
    <nav className="bg-green-300 text-black py-4 flex justify-between">
      <div className="container mx-auto flex items-center px-4">
        <div className="flex items-center">
          <div className="border-2 border-gray-300 rounded-lg px-2 flex items-center">
            <h1 className="text-2xl font-bold px-4 py-2 transition-all duration-300 ease-in-out transform hover:text-blue-500 hover:scale-105 glow-effect">
              Trilha
            </h1>
          </div>
        </div>

        <div className="hidden md:flex flex-grow justify-center items-center">
          
        </div>

        <div className="flex items-center">
          {!isAuthenticated ? (
            <>
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
            </>
          ) : (
            <>
              <NavLink
                to="/notifications"
                className={({ isActive }) => `mr-4 text-lg transition-all duration-300 ease-in-out transform ${isActive ? 'text-blue-950' : 'hover:text-blue-500 hover:scale-105'} glow-effect`}
              >
                Notificações
              </NavLink>
              <NavLink
                to="/logout"
                className={({ isActive }) => `mr-4 text-lg transition-all duration-300 ease-in-out transform ${isActive ? 'text-blue-950' : 'hover:text-blue-500 hover:scale-105'} glow-effect`}
              >
                Logout
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
