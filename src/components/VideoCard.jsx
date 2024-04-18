import React from 'react'
import '../styles/VideoCard.css'
import { CgPlayButton } from "react-icons/cg";
const VideoCard = ({index,name,image}) => {
  return (
    <div className='VideoCard' style={{backgroundImage:`url(${image})`}}>
    <a href="#/"><CgPlayButton /></a>
    <p>{name}</p>
    </div>
  )
}

export default VideoCard
