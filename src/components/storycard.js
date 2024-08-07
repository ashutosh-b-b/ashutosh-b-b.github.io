import React, { useState } from 'react';
import "../styles/stories.css"

export default function StoryCard(props) {
    function redirect_story(){
        window.open(props.story_url, '_blank')
    }
    // console.log(props.class_addon + " " + props.id)
    return(
    <div className = {"story-container" + props.class_addon} onClick={redirect_story} id={props.id} ref = {props.story_ref}>
        <img className = "story-image" src = {props.image_url}></img>
        <div className="story-head">
            {props.story_head}
        </div>
    </div>
    )
}