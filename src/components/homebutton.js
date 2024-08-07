import React, { useState } from 'react';
import "../styles/stories.css"
import "../styles/togglebtn.css"
export default function HomeButton(props) {

    // console.log(props.class_addon + " " + props.id)
    function moveDown(e){
        props.allSectionEntries[1].target.scrollIntoView({behavior: 'smooth'})
    }
    return(
        <div className="toggle-button-container">

        <div className = "toggle-button vertical-button">
          <div className='toggle-button-txt' onClick={moveDown}>
            <img src="/assets/downarrow.svg" id="home-button" class="toggle-button-svg-active"/>
          </div>
        </div>
      </div>
    )
}