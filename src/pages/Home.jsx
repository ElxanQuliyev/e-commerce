import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import YouTube from 'react-youtube'
import ShopApi from '../api/ShopApi'
import ProductList from '../components/productList/ProductList'

//context api
//redux
const Home = () => {
  const [products, setProducts] = useState([]);
  const getHandleProducts = async () => {
    setProducts(await ShopApi.getProducts());
  };
  useEffect(() => {
    getHandleProducts();
  }, []);
  return (
    <div>
      <ProductList title={"Latest Products"} products={products}/>
      <ProductList title={"Discount Products"} products={products}/>

    </div>
  )
}

export default Home