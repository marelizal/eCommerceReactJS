import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, removeFromCart } from "../../state/slices/cartSice";
import { Modal, Button } from "react-bootstrap";
import {  useNavigation } from "react-router-dom"; // Importa useHistory desde react-router-dom

const CartView = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const cartItems = useSelector((state) => state.cart.items);
  const [showModal, setShowModal] = useState(false);
  const [purchaseSuccessful, setPurchaseSuccessful] = useState(false);
  const dispatch = useDispatch();

  const handleRemove = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleConfirmarCompra = () => {
   
    // Cerrar el modal después de un tiempo
    setPurchaseSuccessful(true);
    setTimeout(() => {
      setPurchaseSuccessful(false);
      setShowModal(false);
      window.location.href = '/';
      dispatch(clearCart());
    }, 3000); 
  };

  const handlePagar = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <div className="container">
      {isAuthenticated ? (
        <div>
          <h2 className="mb-4">
            Carrito de Compras (Total a pagar: ${calculateTotal()})
          </h2>
          <div className="row">
            {cartItems.length === 0 ? (
              <p className="col-12">El carrito está vacío.</p>
            ) : (
              cartItems.map((item) => (
                <div
                  className="card col-md-4 mb-4 p-4 pl-4"
                  style={{ marginLeft: 3 }}
                  key={item.id}
                >
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
          <button className="btn btn-primary" onClick={handlePagar}>
            Pagar
          </button>
          <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Confirmar Compra</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {purchaseSuccessful ? (
                <p>¡Compra exitosa! Gracias por tu compra.</p>
              ) : (
                <p>¿Estás seguro de que deseas realizar la compra?</p>
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancelar
              </Button>
              {!purchaseSuccessful && (
                <Button variant="primary" onClick={handleConfirmarCompra}>
                  Confirmar
                </Button>
              )}
            </Modal.Footer>
          </Modal>
        </div>
      ) : (
        <p>No estás autenticado. Inicia sesión para acceder al carrito.</p>
      )}
    </div>
  );
};

export default CartView;
