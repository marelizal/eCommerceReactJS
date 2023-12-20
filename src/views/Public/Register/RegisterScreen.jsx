import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from "react";
import axios from "axios";

const RegisterScreen = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleRegister = () => {
   
    axios.post("url_de_tu_api/register", userData).then((response) => {
      
    });
  };

  return (
    <div>
      <h2>Registro de Usuario</h2>
      <form>
        <label>
          Nombre de Usuario:
          <input
            type="text"
            value={userData.username}
            onChange={(e) =>
              setUserData({ ...userData, username: e.target.value })
            }
          />
        </label>
        <label>
          Correo Electrónico:
          <input
            type="email"
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
        </label>
        <label>
          Contraseña:
          <input
            type="password"
            value={userData.password}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />
        </label>
        <button type="button" onClick={handleRegister}>
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default RegisterScreen;
