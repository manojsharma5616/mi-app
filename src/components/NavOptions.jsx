import React from 'react'
import NavCard from './NavCard.jsx'
import '../styles/NavOptions.css'
const NavOptions = ({miPhones,redmiPhones,tv,laptop,lifeStyle,home,audio,accessories}) => {
  return (
    <div className='NavOptions'>
      {miPhones && miPhones.map((item,index)=>(
        <NavCard key={item.image} image={item.image} name={item.name} price={item.price} index={index}/>
      ))}
      {redmiPhones && redmiPhones.map((item,index)=>(
        <NavCard key={item.image} image={item.image} name={item.name} price={item.price} index={index}/>
      ))}
      {tv && tv.map((item,index)=>(
        <NavCard key={item.image} image={item.image} name={item.name} price={item.price} index={index}/>
      ))}
      {laptop && laptop.map((item,index)=>(
        <NavCard key={item.image} image={item.image} name={item.name} price={item.price} index={index}/>
      ))}
      {lifeStyle && lifeStyle.map((item,index)=>(
        <NavCard key={item.image} image={item.image} name={item.name} price={item.price} index={index}/>
      ))}
      {home && home.map((item,index)=>(
        <NavCard key={item.image} image={item.image} name={item.name} price={item.price} index={index}/>
      ))}
      {audio && audio.map((item,index)=>(
        <NavCard key={item.image} image={item.image} name={item.name} price={item.price} index={index}/>
      ))}
      {accessories && accessories.map((item,index)=>(
        <NavCard key={item.image} image={item.image} name={item.name} price={item.price} index={index}/>
      ))}
    </div>
  )
}

export default NavOptions;
