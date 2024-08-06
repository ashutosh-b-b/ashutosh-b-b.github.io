import React, { useState } from 'react';
import "../styles/hero.css"
import profile_pic from '../assets/pp_circle.png'
function Hero() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div className='hero-container'>
      <div className='profile-picture-container'>
          <img className = 'profile-pic' src = {profile_pic}></img>
      </div>
      <div className='about-me-container'>
        <div className='namaste'>
            Namaste!
        </div>    
        <div className='about-me-txt'>
        I'm Ashutosh, a software developer at JuliaHub, currently working on developing surrogates for Dynamical Systems. My interests lie in Machine Learning and Open Source software development. Outside of coding, I enjoy watching movies and crafting short stories. Welcome to my portfolio!
        </div>
      </div>
    </div>
  );
}

export default Hero