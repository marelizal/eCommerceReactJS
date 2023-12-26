import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Jumbotron from "../../../components/Jumbotron";

const HomeScreen = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const userProfile = useSelector((state) => state.auth.userProfile);
  return (
    <div>
      {!isAuthenticated ? (
            <Jumbotron
            title="Bienvenido a nuestro Ecommerce"
            lead="Descubre una amplia variedad de productos de alta calidad. Regístrate para obtener una experiencia de compra personalizada."
            buttonText="Registrarse"
            buttonLink="/register"
          />
      ) : (
        <Jumbotron
        title={`¡Bienvenido de nuevo, ${userProfile.name}!`}
        lead=" Explora nuestra amplia variedad de productos de alta calidad.
        ¡Disfruta de una experiencia de compra personalizada!"
   
      />
      )}
    </div>
  );
};

export default HomeScreen;
