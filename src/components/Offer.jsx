import React from 'react'

const Offer = ({src,link,index}) => {
  return (
    <div className='offer'>
      <a href={link}><img src={src} alt={`${index} offer`}/></a>
    </div>
  )
}

export default Offer
