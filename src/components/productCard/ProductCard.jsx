import React from 'react'

const ProductCard = ({product}) => {
  return (
    
      <div className="col-lg-4">
        <div className="product-item">
          <img  className='img-fluid' style={{height:'200px', objectFit:'cover'}} src={product.image} alt="" />
          <h4>{product.title}</h4>
        </div>
      </div>

    
  )
}

export default ProductCard