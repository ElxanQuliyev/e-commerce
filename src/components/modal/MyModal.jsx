import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ShopApi from "../../api/ShopApi";

const MyModal = ({modalAction, closeEvent, productId}) => {
    console.log(productId)

    const [product,setProduct]=useState({});
    const getProductById=useCallback(async()=>{
      const response=await ShopApi.getProductSingle(productId);
      setProduct(response)
    },[productId])
  
     useEffect(()=>{
      getProductById()
     },[getProductById])
  return (
    <div className={`product-modal ${modalAction ? 'active' : ''}`}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-5">
            <div className="product-modal-img">
              <img src={product.image} style={{
                  width: 300
              }} alt="" />
            </div>
          </div>
          <div className="col-7">
            <h5>{product.name}</h5>
            <p>{product.description}</p>
            <Link to="#">Add to Cart</Link>
            <Link to="#">More Detail</Link>
          </div>
        </div>
        <button onClick={closeEvent} className="modalClose">
          &times;
        </button>
      </div>
    </div>
  );
};

export default MyModal;
