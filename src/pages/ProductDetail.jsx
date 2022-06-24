import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ShopApi from '../api/ShopApi';

const ProductDetail = () => {
  const {id}=useParams();
  const [product,setProduct]=useState(null);
  const getProductById=useCallback(async()=>{
    const response=await ShopApi.getProductSingle(id);
    setProduct(response)
  },[id])

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
            </div>
          </div>
              ):<p>loading...</p>}
      </div>
    </section>
  )
}

export default ProductDetail