import React from 'react'
import '../styles/HotAccessroiesMenu.css'
import { Link } from 'react-router-dom'
const HotAccessroiesMenu = () => {
  return (
    <div className='HotAccessroiesMenu'>
      <Link to={'/'} className='HotAccessoriesLink'>Music Store</Link>
      <Link to={'/smartDevice'} className='HotAccessoriesLink'>SmartDevice</Link>
      <Link to={'/home'} className='HotAccessoriesLink'>Home</Link>
      <Link to={'/lifeStyle'} className='HotAccessoriesLink'>LifeStyle</Link>
      <Link to={'/mobileAccessories'} className='HotAccessoriesLink'>MobileAccessories</Link>
    </div>
  )
}

export default HotAccessroiesMenu
