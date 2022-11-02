import React from 'react';
import "./About.css";
import myPhoto from "../../media/me.jpg";

const About = () => {
  return (
    <div className='about-container'>
        <div className='about-desc'>
            <h3>Dejame decirte algo sobre mí...</h3>
            <p>Soy un aficionado de seguir aprendiendo todo sobre desarrollo y programación web, con muchas ganas de seguir sumando experiencia en todo proyecto y oportunidad que se me presente en este maravilloso mundo del desarrollo web. Mi impulso es poder comprender el contexto tecnológico en el que vivo y cómo desde mi lugar poder mejorarlo.</p>
        </div>
        <div className='about-img'>
            <img src={myPhoto} alt='about'/>
        </div>
    </div>
  )
}

export default About