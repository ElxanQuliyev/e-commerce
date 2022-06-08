import React, { useEffect, useState } from 'react'
import ShopApi from '../api/ShopApi';

const ProductDetail = () => {
  const [ProductDetail, setProductDetail] = useState("");
  const getProductDetail = async()=>{
    setProductDetail(await ShopApi.getProductSingle())
  }
  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <section>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4">
            <img className='img-fluid' src={ProductDetail.image} alt="" />
          </div>
          <div className="col-lg-5">
            <h1>
              {ProductDetail.title}
            </h1>
            <h5>{ProductDetail.price} $</h5>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default ProductDetail