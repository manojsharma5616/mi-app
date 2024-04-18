import React from 'react'
import '../styles/HotAccessories.css';
const HotItemCard = ({image,index,price,name}) => {
  return (
    <div className='HotItemCard'>
      <img src={image} alt={`${index}-product`} />
      <p>{name}</p>
      <span>{price}</span>
    </div>
  )
}

export default HotItemCard
