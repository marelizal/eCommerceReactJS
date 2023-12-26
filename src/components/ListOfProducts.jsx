import React, { useState } from "react";
import ProductCard from "./ProductCard";

const ListOfProducts = ({ products, isHorizontal }) => {
  const productsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  // Calcular el índice de inicio y fin para la página actual
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  // Obtener los productos para la página actual
  const currentProducts = products.slice(startIndex, endIndex);

  // Calcular el número total de páginas
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Función para cambiar de página
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className={`mt-5`}>
      <div className={`d-flex ${isHorizontal ? "flex-row" : "flex-column"}`}>
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <nav aria-label="Page navigation" className="mt-3">
        <ul className="pagination">
          {[...Array(totalPages).keys()].map((page) => (
            <li
              key={page + 1}
              className={`page-item ${currentPage === page + 1 ? "active" : ""}`}
            >
              <button
                className="page-link"
                onClick={() => handlePageChange(page + 1)}
              >
                {page + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default ListOfProducts;
