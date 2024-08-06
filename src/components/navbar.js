import React, { useState } from 'react';
import "../styles/navbar.css"
function NavBar(props) {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const websitecolors = ["#E36255", "#8b86be", "#9AC1F0", "#e27396", "#a5ffd6"]
  const currentsection = props.sectionviews.findIndex((sectionview) => sectionview == true)
  const currentcolor = websitecolors[currentsection]

  const navbar_options = ["Home", "Experience", "Projects", "Blogs", "Stories"]

  function MouseOver(event) {
    event.target.style.color = 'black';
    event.target.style.background= currentcolor;
    // props.entries[currentsection].target.style.color = currentcolor;
    // props.entries[currentsection].target.style.background= 'inherit';
  }
  function MouseOut(event, idx){
    if (idx == currentsection){
      return
    }
    event.target.style.color = currentcolor;
    event.target.style.background= 'inherit';
  }
  function scrollSection(event, idx){
    props.entries[idx].target.scrollIntoView()
  }

  return (
    <div className='navbar-container'>
      {navbar_options.map((nav_option, idx) => 
          idx === currentsection ? 
          <div className='navbar-option' style={{color: "black", backgroundColor: currentcolor}} onMouseOver={MouseOver} onMouseOut={(e) => MouseOut(e, idx)} onClick={(e) => scrollSection(e, idx)}>
          { nav_option}
          </div> : 
           <div className='navbar-option' style={{color: currentcolor}} onMouseOver={MouseOver} onMouseOut={MouseOut} onClick={(e) => scrollSection(e, idx)}>
           { nav_option}
           </div>
      )}
    </div>
  );
}

export default NavBar