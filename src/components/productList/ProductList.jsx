import React, { useEffect, useState } from "react";
import ProductCard from "../productCard/ProductCard";
import ShopApi from '../../api/ShopApi'

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const getHandleProducts = async () => {
    setProducts(await ShopApi.getProducts());
  };
  useEffect(() => {
    getHandleProducts();
  }, []);
  return (
    <section>
      <div className="container">
        <h4>Latest Product</h4>
        <div className="row">
            {
                products?.map((product)=>(
                    <ProductCard key={product.id} product={product} />
                ))
                }

        </div>
      </div>
    </section>
  );
};

export default ProductList;
