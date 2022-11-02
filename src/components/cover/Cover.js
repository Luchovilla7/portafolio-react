import React from 'react';
import "./Cover.css";
import coverVideo from "../../media/coverVideo.mp4";

const Cover = () => {
  return (
    <div className='cover-container'>
        <video className='video' src={coverVideo} autoPlay loop muted />
        <p>HI WORLD</p>
        <h1>I'm Luciano Villalba</h1>
        <p>Frontend Developer | Content Creator | Entrepeneur</p>
    </div>
  )
}

export default Cover