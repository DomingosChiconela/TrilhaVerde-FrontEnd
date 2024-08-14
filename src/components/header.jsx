import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export const Header = ({ userType }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-600 text-white py-4">
     
    </nav>
  );
};
