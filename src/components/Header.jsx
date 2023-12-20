import 'bootstrap/dist/css/bootstrap.min.css';


import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img src="tu_logo.png" alt="Logo de tu empresa" />
        </Link>
      </div>

      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/categories">Categorías</Link></li>
          <li><Link to="/products">Productos</Link></li>
          {/* Agrega más enlaces según sea necesario */}
        </ul>
      </nav>

      <div className="user-actions">
        {/* Agrega elementos relacionados con la autenticación, por ejemplo, enlaces de inicio de sesión */}
        <Link to="/login">Iniciar Sesión</Link>
      </div>
    </header>
  );
};

export default Header;
