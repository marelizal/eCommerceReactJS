import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../state/slices/authSlice";

const Navbar = () => {
  const userProfile = useSelector((state) => state.auth.userProfile);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const cartItems = useSelector((state) => state.cart.items.length);

  const dispatch = useDispatch();
  console.log(userProfile);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Ecommerce
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/home/categories">
                Categorias
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/home/products">
                Productos
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
          {isAuthenticated && (
          <li className="nav-item">
            <Link className="nav-link" to="/home/cart">
              <FaShoppingCart size={20} />
              {cartItems > 0 && <span className="badge bg-secondary">{cartItems}</span>}
            </Link>
          </li>
        )}
            {isAuthenticated ? (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    src={userProfile.avatar}
                    alt="User Avatar"
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      marginRight: "5px",
                    }}
                  />

                  <span>{userProfile.email}</span>
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <div style={{ padding: 15 }}>
                    <li>
                      <strong>{userProfile.name}</strong>
                    </li>
                    <li>
                      <span>{userProfile.role}</span>
                    </li>
                  </div>
                  <li>
                    <button className="btn btn-link" onClick={handleLogout}>
                      Desconectarme
                    </button>
                  </li>
                </ul>
              </li>
            ) : null}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
