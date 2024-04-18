import Offer from '../components/Offer.jsx'
import React from 'react'
import '../styles/Offers.css'

const Offers = ({offer}) => {
  return (
    <div className='offers'>
    {offer.map((item,index)=>(
        <Offer key={item.image} index={index} src={item.image} link={item.url}/>
    ))}  
    </div>
  )
}

export default Offers;
