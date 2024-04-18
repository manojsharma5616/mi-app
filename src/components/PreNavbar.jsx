import React from 'react'
import '../styles/PreNavbar.css'
import { CiShoppingCart } from "react-icons/ci";
const PreNavbar = () => {
  return (
    <div className='preNav'>
      <div>
      <a href="https://www.mi.com/in/">MI INDIA</a><span>|</span>
      <a href="https://www.mi.com/in/phone/">GET MI STORE</a><span>|</span>
      <a href="https://www.mi.com/in/smart-home/">ONLINE HELP</a><span>|</span>
      <a href="https://www.mi.com/in/smart-office/">RETAIL STORE</a>
      </div>
      <div>
      <a href="https://www.mi.com/in/discover">SIGN IN</a><span>|</span>
      <a href="https://www.mi.com/in/phone/">SIGN UP</a><span>|</span>
      <a href="https://store.mi.com/in/cart"><CiShoppingCart/> CART (0)</a>
      </div>
    </div>
  )
}

export default PreNavbar;
