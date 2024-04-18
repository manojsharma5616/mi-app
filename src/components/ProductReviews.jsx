import React from 'react'
import ProductReview from './ProductReview.jsx'
import '../styles/ProductReview.css'
const ProductReviews = ({productReviews}) => {
  return (
    <div className='ProductReviews'>
      {productReviews.map((item,index)=>(
        <ProductReview key={index} name={item.name} image={item.image} price={item.price} review={item.review} index={index}/>
      ))}
    </div>
  )
}

export default ProductReviews
