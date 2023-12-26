import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product, fullWidth, showFullDescription }) => {
  return (
    <Link
      to={`/home/products/${product.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div
        className="card"
        style={{
          width: fullWidth ? "100%" : "18rem",
          marginLeft: 10,
          transition: "transform 0.2s",
        }}
      >
        <img
          src={product.images[0]}
          className="card-img-top"
          alt={product.title}
        />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">
            {showFullDescription
              ? product.description
              : product.description.length > 50
              ? `${product.description.slice(0, 50)}...`
              : product.description}
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Price: ${product.price}</li>
          <li className="list-group-item">
            Category: {product.category.name}
          </li>
        </ul>
        <div className="card-body d-flex">
          <button className="btn btn-secondary w-100">Ver detalles</button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
