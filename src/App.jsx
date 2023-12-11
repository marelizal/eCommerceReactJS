import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import routes from "./config/routes";
import { lazy } from "react";
import Layout from "./components/Layout";

const Home = lazy(() => import("./views/Private/Home/HomeScreen"));
const Categories = lazy(() =>
  import("./views/Private/Categories/CategoriesScreen")
);
const Product = lazy(() => import("./views/Private/Products/ProductScreen"));
const Login = lazy(() => import("./views/Public/Login/LoginScreen"));
const Register = lazy(() => import("./views/Public/Register/RegisterScreen"));
const NotFound = lazy(() => import("./views/NotFound/NotFound"));

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* Ruta inicial */}
          <Route path="/" element={<Navigate to={routes.PRIVATE} />} />

          {/* Rutas privadas */}
          <Route
            path="private/*"
            element={
              <PrivateRoute>
                <Route
                  index
                  element={
                    <Layout>
                      <Route path={routes.HOME} element={<Home />} />
                      <Route
                        path={routes.CATEGORIES}
                        element={<Categories />}
                      />
                      <Route path={routes.PRODUCTS} element={<Product />} />
                      <Route path="*" element={<NotFound />} />
                    </Layout>
                  }
                />
              </PrivateRoute>
            }
          />

          {/* Rutas públicas */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
