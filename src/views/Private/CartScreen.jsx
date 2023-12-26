import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../state/slices/cartSice";

const CartView = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="container">
      {isAuthenticated ? (
        <div>
          <h2 className="mb-4">Carrito de Compras (Total a pagar: ${calculateTotal()})</h2>
          <div className="row">
            {cartItems.length === 0 ? (
              <p className="col-12">El carrito está vacío.</p>
            ) : (
              cartItems.map((item) => (
                <div className="card col-md-4 mb-4 p-4 pl-4" style={{marginLeft:3}} key={item.id}>
                  <h5>{item.title}</h5>
                  <p>Precio: ${item.price}</p>
                  <p>Cantidad: {item.quantity}</p>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleRemove(item.id)}
                  >
                    Quitar
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      ) : (
        <p>No estás autenticado. Inicia sesión para acceder al carrito.</p>
      )}
    </div>
  );
};

export default CartView;
