import React from 'react'
import Ingredients from '../assets/ingredients2.webp';
import Menu from '../assets/menu2.webp';

const Hero = () => {
  return (
    <div className="hero-section">
        <div className="hero-s l-container">
        <img src={Ingredients} alt=""/>
        <button className="btn-hero">Details</button>
        </div>
        <div className="hero-s r-container">
        <img src={Menu} alt=""/>
        <button className="btn-hero">Details</button>
        </div>
    </div>
  )
}

export default Hero