import React, { useState, useEffect } from "react";
import Pagination from "./Pagination/Pagination";
import "../styles.css";
import { useCallback } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  const fetchProducts = useCallback(async () => {
    console.log("inside fetchProducts");
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${(page - 1) * 10}`
      );
      const responseData = await response.json();
      console.log("responseData", responseData);
      if (responseData && responseData.products) {
        setProducts(responseData.products);
        setTotal(responseData.total);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }, [page]);

  useEffect(() => {
    fetchProducts();
  }, [page, fetchProducts]);

  return (
    <div className={"product-list-container"}>
      <h1 className={"product-list-title"}>Product List</h1>
      {products && products.length ? (
        <ul className={"product-list"}>
          {products.map((product) => (
            <li key={product.id} className={"products"}>
              <img src={product.thumbnail} alt={product.title} />
              <span style={{ fontWeight: "bold" }}>{product.title}</span> - $
              {product.price}
            </li>
          ))}
        </ul>
      ) : (
        "Loading..."
      )}
      {products.length > 0 && (
        <Pagination
          products={products}
          total={total}
          page={page}
          setPage={setPage}
        />
      )}
    </div>
  );
};

export default ProductList;
