const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
// Obtener todos los productos
export const getAllProducts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/products`);
    if (!response.ok) {
      throw new Error('Error al obtener los productos');
    }
    const products = await response.json();
    return products;
  } catch (error) {
    console.error('Error al obtener los productos:', error);
    throw error;
  }
};

// Obtener un solo producto por ID
export const getSingleProduct = async (productId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/products/${productId}`);
    if (!response.ok) {
      throw new Error('Error al obtener el producto');
    }
    const product = await response.json();
    return product;
  } catch (error) {
    console.error('Error al obtener el producto:', error);
    throw error;
  }
};
