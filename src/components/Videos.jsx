import React from 'react'
import VideoCard from './VideoCard.jsx'
import '../styles/VideoCard.css'
const Videos = ({videos}) => {
  return (
    <div className='Videos'>
      {videos.map((item,index)=>(
        <VideoCard key={item.image} index={index} image={item.image} name={item.name}/>
      ))}
    </div>
  )
}

export default Videos
