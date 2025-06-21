import React, { useEffect, useState } from "react";
import ProductsCart from "./Components/ProductsCart";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 10;

  const fetchProducts = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=100");
    const Json = await data.json();
    setProducts(Json.products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const totalProducts = products.length;
  const numberPages = Math.ceil(totalProducts / pageSize);

  // Get products for the current page
  const paginatedProducts = products.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="app-container">
      {products.length === 0 ? (
        <h2 className="no-products">No products found</h2>
      ) : (
        <>
          <h1>Pagination Example</h1>
          <div className="products-grid">
            {paginatedProducts.map((p) => (
              <ProductsCart
                key={p.id}
                thumbnail={p.thumbnail}
                title={p.title}
                price={p.price}
              />
            ))}
          </div>
          <div className="pagination-controls">
            {Array.from({ length: numberPages }, (_, ind) => (
              <button
                key={ind + 1}
                onClick={() => setCurrentPage(ind + 1)}
                className={currentPage === ind + 1 ? "active-page" : ""}
              >
                {ind + 1}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
