import React from 'react'
import '../styles/NavOptions.css'
const NavCard = ({image,name,price,index}) => {
  return (
    <div className='NavCard'>
      <img src={image} alt={`${index}-image`} />
      <p>{name}</p>
      <b>{price}</b>
    </div>
  )
}

export default NavCard
