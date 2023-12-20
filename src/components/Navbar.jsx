// Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/categories">Categorías</Link></li>
        <li><Link to="/products">Productos</Link></li>
        {/* Agrega más enlaces según sea necesario */}
      </ul>
    </nav>
  );
};

export default Navbar;
