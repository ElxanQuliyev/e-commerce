import React, { useEffect, useState } from "react";
import ProductCard from "../productCard/ProductCard";
import ShopApi from "../../api/ShopApi";
import MyModal from "../modal/MyModal";

const ProductList = ({ products, title }) => {
  return (
    <>
      <section>
        <div className="container">
          <h4>{title}</h4>
          <div className="row">
            {products?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductList;
