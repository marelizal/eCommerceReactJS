import React, { useEffect, useState } from "react";
import { getSingleProduct } from "../../services/product.service";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateQuantity } from "../../state/slices/cartSice";

const ProductDetailView = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const fetchedProduct = await getSingleProduct(id);
        setProduct(fetchedProduct);
      } catch (error) {
        console.error("Error al obtener el producto:", error.message);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      const existingItem = cartItems.find((item) => item.id === product.id);

      if (existingItem) {
        // If the product is already in the cart, update the quantity
        dispatch(updateQuantity({ id: existingItem.id, quantity: existingItem.quantity + 1 }));
      } else {
        // If the product is not in the cart, add it
        dispatch(addToCart({ ...product, quantity: 1 }));
      }

      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000); // Hide the alert after 3 seconds
    }
  };

  return (
    <div className="mt-4">
      {product ? (
        <div>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <div className="d-flex">
            {product.images.map((image, index) => (
              <div key={index} className="mr-4">
                <img
                  src={image}
                  alt={`Product ${index}`}
                  className="rounded mb-4"
                  height={150}
                  style={{ marginLeft: 10 }}
                />
              </div>
            ))}
          </div>
          <ul>
            <li>Precio: ${product.price}</li>
            <li>Categoría: {product.category.name}</li>
          </ul>
          {isAuthenticated && (
            <>
              <button
                className="btn btn-primary btn-sm"
                onClick={handleAddToCart}
              >
                Agregar al carrito
              </button>
              {showAlert && (
                <div className="alert alert-success mt-3" role="alert">
                  Producto agregado al carrito.
                </div>
              )}
            </>
          )}
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default ProductDetailView;
