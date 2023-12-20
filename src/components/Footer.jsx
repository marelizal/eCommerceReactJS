import 'bootstrap/dist/css/bootstrap.min.css';


import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h3>Enlaces Rápidos</h3>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/categories">Categorías</a></li>
            <li><a href="/products">Productos</a></li>
            {/* Agrega más enlaces según sea necesario */}
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contacto</h3>
          <p>Dirección: Tu Dirección</p>
          <p>Teléfono: Tu Número de Teléfono</p>
          <p>Email: tu@email.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2023 Tu Empresa. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
