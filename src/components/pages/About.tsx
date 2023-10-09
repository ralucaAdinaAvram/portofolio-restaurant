import React from 'react'
import Ingredients from '../../assets/ingredients.webp';
import './About.css'

const About = () => {
  return (
    <>
   
    <div className="hero-about">
      <div className="hero-container-about">
        <div className="column-left-about">
          <h4>Who we are</h4>
          <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
               sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          
        </div>
        <div className="column-right-about">
          <img
            src={Ingredients}
            alt="illustration
        "
            className="hero-image-about"
          />
        </div>
      </div>
    </div>
    </>
       
  )
}

export default About