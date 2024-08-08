import React, { useState } from 'react';
import "../styles/togglebtn.css"

export default function ToggleButton(props) {
    const active_filter = props.filter
    const maxLengthHorizontal = props.entries.length
    const current_idx = props.current_idx ? props.current_idx : props.views.findIndex((view) => view == true)
    const current_section = props.allSectionViews.findIndex((view) => view == true)
    const maxLengthVertical = props.allSectionEntries.length
    const scroll_inline_right = props.id == "toggle-button-stories" ? 'start' : 'center'
    const scroll_inline_left = props.id == "toggle-button-stories" ? 'end' : 'center'
    function moveRight(e){
        if((current_idx + 1)== maxLengthHorizontal){
            return null
        }
        props.entries[current_idx + 1].target.scrollIntoView({ behavior: 'smooth', block: 'center', inline: scroll_inline_right })
        // props.entries[current_idx + 1].target.scroll({left: '1000'})
    }
    const finalmoveRight = props.moveRight ? props.moveRight : moveRight

    function moveLeft(e){
        if(current_idx == 0){
            return null
        }
        props.entries[current_idx - 1].target.scrollIntoView({ behavior: 'smooth', block: 'center', inline: scroll_inline_left })
    }
    const finalmoveLeft = props.moveLeft ? props.moveLeft : moveLeft

    function moveUp(e){
        if(btn_active.up){
          props.allSectionEntries[current_section-1].target.scrollIntoView({behavior: 'smooth'})
        }
    }
    function moveDown(e){
      if(btn_active.down){
        props.allSectionEntries[current_section+1].target.scrollIntoView({behavior: 'smooth'})
      }
  }
    const btn_active = {
      left: current_idx > 0 ,
      right: current_idx < maxLengthHorizontal - 1,
      up: current_section > 0,
      down: current_section < maxLengthVertical - 1,
    }
    return(
    <div className="toggle-button-container">
        <div className = "toggle-button" style={{backgroundColor: props.color }}>
          <div className='toggle-button-txt' onClick={finalmoveLeft}>
            <img src="/assets/leftarrow.svg" id={btn_active.left ? props.id: ""} class={btn_active.left ? "toggle-button-svg-active" : "toggle-button-svg-inactive"}/>
          </div>
        </div>
        <div className='toggle-button-vertical'>
        <div className = "toggle-button vertical-button" style={{backgroundColor: props.color}}>
          <div className='toggle-button-txt' onClick={moveUp}>
            <img src="/assets/uparrow.svg" id={btn_active.up ? props.id: ""} class={btn_active.up ? "toggle-button-svg-active" : "toggle-button-svg-inactive"}/>
          </div>
        </div>
        <div className = "toggle-button vertical-button" style={{backgroundColor: props.color}}>
          <div className='toggle-button-txt' onClick={moveDown}>
            <img src="/assets/downarrow.svg" id={btn_active.down ? props.id: ""} class={btn_active.down ? "toggle-button-svg-active" : "toggle-button-svg-inactive"}/>
          </div>
        </div>
        </div>

        <div className = "toggle-button" style={{backgroundColor: props.color}} onClick={finalmoveRight}>
          <div className='toggle-button-txt'>
            <img src="/assets/rightarrow2.svg" id={btn_active.right ? props.id: ""} class={btn_active.right ? "toggle-button-svg-active" : "toggle-button-svg-inactive"}/>
          </div>
        </div>
      </div>
    )
}