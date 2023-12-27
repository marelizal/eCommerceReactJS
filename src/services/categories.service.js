const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Función para obtener todas las categorías
export const getAllCategories = async () => {
  try {
    // Realizar la solicitud GET a la API
    const response = await fetch(`${API_BASE_URL}/categories`);

    // Verificar si la respuesta es exitosa (código 200)
    if (response.ok) {
      // Parsear la respuesta JSON
      const categories = await response.json();
      return categories;
    } else {
      // Si la respuesta no es exitosa, lanzar un error
      throw new Error(Error `${response.status}: ${response.statusText}`);
    }
  } catch (error) {
    console.error('Error al obtener las categorías:', error.message);
    throw error;
  }
};