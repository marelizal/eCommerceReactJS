import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { useSelector } from "react-redux";
import Layout from "./components/Layout";
import LoginScreen from "./views/Public/Login/LoginScreen";
import HomeScreen from "./views/Public/Home/HomeScreen";
import Register from "./views/Public/Register/RegisterScreen";
import CategoriesScreen from "./views/Private/Categories/CategoriesScreen";
import ProductsScreen from "./views/Private/Products/ProductScreen";
import ProductDetailView from "./views/Private/ProductDetail";
import CartView from "./views/Private/CartScreen";
import NotFound from "./views/NotFound/NotFound"; 

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* Ruta protegida que requiere autenticación */}
          <Route path="/home/*" element={<ProtectedRoute redirectTo="/login" />}>
            <Route index element={<HomeScreen />} />
            <Route path="categories" element={<CategoriesScreen />} />
            <Route path="products" element={<ProductsScreen />} />
            <Route path="cart" element={<CartView />} />
            <Route path="products/:id" element={<ProductDetailView />} />
          </Route>

          {/* Ruta de inicio que se muestra si hay autenticación */}
          {isAuthenticated ? (
            <Route path="/" element={<Navigate to="/home" />} />
          ) : (
            <Route path="/" element={<LoginScreen />} />
          )}

          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<Register />} />

          {/* Ruta para Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
