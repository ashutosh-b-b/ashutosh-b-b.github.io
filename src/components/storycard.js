import React, { useState } from 'react';
import "../styles/stories.css"

export default function StoryCard(props) {
    function redirect_story(){
        window.open(props.story_url, '_blank')
    }
    return(
    <div className = "story-container" onClick={redirect_story} >
        <img className = "story-image" src = {props.image_url}></img>
        <div className="story-head">
            {props.story_head}
        </div>
    </div>
    )
}