import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleLogin = () => {
    // Llamada a la API para autenticar al usuario
    axios.post('url_de_tu_api/login', credentials).then((response) => {
      // Manejar la respuesta, guardar token, redirigir, etc.
    });
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <input
        type="text"
        placeholder="Correo electrónico"
        value={credentials.email}
        onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={credentials.password}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
      />
      <button onClick={handleLogin}>Iniciar Sesión</button>
    </div>
  );
};

export default Login;
