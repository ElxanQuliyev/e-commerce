import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({product}) => {
  return (
      <div className="col-lg-4">
        <div className="product-item text-center mb-5">
          <Link to={`/product-detail/${product.id}`}>
          <img  className='img-fluid' 
            style={{height:'300px', objectFit:'contain'}} src={product.image} alt="" />
          <h6>{product.name}</h6>
          {product.discount!==0 && product.discount?(
              <>
              <del>{product.price}</del>
                <p>{product.discount}</p>
              </>
              ):<p>{product.price}</p>}
          </Link>
        </div>
      </div>
  )
}

export default ProductCard