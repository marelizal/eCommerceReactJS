
import React, { useEffect, useState } from 'react';
import { getAllCategories } from '../../../services/categories.service';

const CategoriesScreen = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await getAllCategories();
        setCategories(categoriesData);
      } catch (error) {
        console.error('Error en la obtención de categorías:', error.message);
      }
    };

    // Llamar a la función de obtención de categorías al montar el componente
    fetchCategories();
  }, []);

  return (
    <div className="container mt-4">
    <h1 className="mb-4">Categorias</h1>
    <div className="row">
      {categories.map((category, index) => (
        <div key={category.id} className="col-md-4 mb-4">
          <div className="card h-100">
            <img src={category.image} alt={category.name} className="card-img-top img-fluid" />
            <div className="card-body">
              <p className="card-text mb-1">{category.name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}

export default CategoriesScreen;