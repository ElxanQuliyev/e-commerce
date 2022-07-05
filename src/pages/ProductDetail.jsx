import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ShopApi from '../api/ShopApi';
import { addToCart } from '../redux/action/CartAction';
import { getUserInfo } from '../redux/action/userActions';

const ProductDetail = () => {
  const dispatch =useDispatch()
  const {id}=useParams();
  const {cartItems} =useSelector(state=>state.cart)
  const [findItem,setFindItem]=useState(null)
  const [product,setProduct]=useState(null);
  const getProductById=useCallback(async()=>{
    const response=await ShopApi.getProductSingle(id);
    setProduct(response)
    setFindItem(cartItems.find(c=>c.id===Number(id)))
  },[id,cartItems])
  console.log(findItem)


   useEffect(()=>{
    getProductById()
   },[getProductById])
  return (
    <section>
      <div className='container'>
            {product?(
              <div className='row align-items-center'>
            <div className="col-lg-6">
              <img src={product.image} className="img-fluid" alt={product.name}/>
            </div>
            <div className="col-lg-6">
              <h4>{product.name}</h4>
              <p>{product.description}</p>
              {product.discount!==0 && !product.discount?(
              <>
              <del>{product.price}</del>
                <p>{product.discount}</p> Azn
              </>
              ):<p>{product.price} Azn</p>}
              <button disabled={findItem ?true :false} onClick={()=>dispatch(addToCart(product.id,1))} className={`btn ${findItem?"btn-danger":"btn-outline-success"}`}>{findItem?"Remove From Cart":"Add To Cart"}</button>
            </div>
          </div>
              ):<p>loading...</p>}
      </div>
    </section>
  )
}

export default ProductDetail