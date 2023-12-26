import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../../../services/product.service';

import ListOfProducts from '../../../components/ListOfProducts';

const ProductScreen = () => {

  const [productList, setProductList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getAllProducts();
        console.log(products);
        setProductList(products);
      } catch (error) {
        console.error('Error al obtener productos:', error);
      }
    };

      fetchProducts();
    
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = productList.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return  (
    <div>
    <div className="w-100 mt-5">
    <h4>Todos los productos</h4>
    </div>
      <div className="mt-4" >
        
        <input
          type="text"
          placeholder="Buscar por nombre"
          value={searchTerm}
          onChange={handleSearch}
          className="form-control mb-3"
        />
        {filteredProducts.length === 0 ? (
          <p>No se encontraron coincidencias.</p>
        ) : (
          <ListOfProducts products={filteredProducts} isHorizontal={true} />
        )}
      </div>
    </div>
  ) 
};

export default ProductScreen;
