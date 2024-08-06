import * as React from 'react';

import "../styles/stories.css"
import stories_data from "../assets/stories_meta.json";
import { ListItemAvatar } from '@mui/material';
import StoryCard from "./storycard"
export default function StoriesCarousel() {

    return(
        <div className = "stories-container">
        <div className = "stories-head">
            My Stories
        </div>
        <div className = "story-carousel-container">
            
            {/* <div className = "story-container" onMouseOver={MouseOver} onMouseOut={MouseOut}></div>
            <div className = "story-container" onMouseOver={MouseOver} onMouseOut={MouseOut}></div>
            <div className = "story-container" onMouseOver={MouseOver} onMouseOut={MouseOut}></div>
            <div className = "story-container" onMouseOver={MouseOver} onMouseOut={MouseOut}></div> */}
        {stories_data.stories.map((item, idx) => (
            <StoryCard image_url = {item.story_img_url} story_head = {item.story_id} story_url = {item.story_url}></StoryCard>
            ))}
        </div>
        </div>

    )
}