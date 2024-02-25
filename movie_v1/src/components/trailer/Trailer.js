import React from 'react'
import { useParams } from 'react-router-dom'
import ReactPlayer from 'react-player';
import './Trailer.css'

const Trailer = () => {
  let param =useParams();
  const key=param.ytTrailerId;
  return (
    <div className='react-player-component'>
      {(key!=null)?<ReactPlayer controls='true' playing={true} url={`https://www.youtube.com/watch?v=${key}`}
      height={'100%'} width={'100%'}/>:null}
    </div>
  )
}

export default Trailer;
