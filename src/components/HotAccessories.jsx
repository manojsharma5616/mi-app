import React from 'react'
import HotItemCard from '../components/HotItemCard.jsx'
import '../styles/HotAccessories.css';
const HotAccessories = ({music,musicCover,smartDevice,smartDeviceCover,home,homeCover,lifeStyle,lifeStyleCover,mobileAccessories,mobileAccessoriesCover}) => {
  return (
    <div className='HotAccessories'>
      <div>
        <img src={musicCover || smartDeviceCover || homeCover || lifeStyleCover || mobileAccessoriesCover} alt="Cover-Image" />
      </div>
      {/* -----------2nd*/}
      <div>
        {music && music.map((item,index)=>(
            <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index}></HotItemCard>
        ))}
        {smartDevice && smartDevice.map((item,index)=>(
            <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index}></HotItemCard>
        ))}
        {home && home.map((item,index)=>(
            <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index}></HotItemCard>
        ))}
        {lifeStyle && lifeStyle.map((item,index)=>(
            <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index}></HotItemCard>
        ))}
        {mobileAccessories && mobileAccessories.map((item,index)=>(
            <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index}></HotItemCard>
        ))}
        <HotItemCard image="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg"></HotItemCard>
        
      </div>
    </div>
  )
}

export default HotAccessories
