import React from "react";
import "./ProductsCart.css"; // import CSS

function ProductsCart({ thumbnail, title, price }) {
  return (
    <div className="product-card">
      <img src={thumbnail} alt={title} className="product-image" />
      <h3 className="product-title">{title}</h3>
      <p className="product-price">${price}</p>
    </div>
  );
}

export default ProductsCart;
