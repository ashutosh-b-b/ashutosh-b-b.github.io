import * as React from 'react';

import "../styles/stories.css"
import stories_data from "../assets/stories_meta.json";
import { ListItemAvatar } from '@mui/material';
import StoryCard from "./storycard"
import useCheckMobileScreen from './useMobileCheck'
import { useInView } from "react-intersection-observer";
import {useState} from 'react'
import ToggleButton from './toggle_button';
import { useRef } from 'react';
import { isSafari } from 'react-device-detect';
export default function StoriesCarousel(props) {

    const [currentSection,setCurrentSection] =useState(0)

      // Declare a new state variable, which we'll call "count"
    const [story1Ref, story1InView, story1Entry] = useInView({ threshold: 0.8, delay:100});
    const [story2Ref, story2InView, story2Entry] = useInView({ threshold: 0.8 , delay:100});
    const [story3Ref, story3InView, story3Entry] = useInView({ threshold:  0.8 , delay:100});
    const [story4Ref, story4InView, story4Entry] = useInView({ threshold:  0.8, delay:100});
    const [story5Ref, story5InView, story5Entry] = useInView({ threshold:  0.8, delay:100});

    const storiesRef = [story1Ref, story2Ref, story3Ref, story4Ref, story5Ref]
    const storiesEntries = [story1Entry, story2Entry, story3Entry, story4Entry, story5Entry]
    const storiesViews = [story1InView, story2InView, story3InView, story4InView, story5InView]

    // const allInViewProps = stories_data.stories.map((idx) => {
    //     useInView({ threshold: 0.8 })
    // })
    // const storiesRef = allInViewProps.map((inViewProp) => inViewProp[0])
    // const storiesEntries = allInViewProps.map((inViewProp) => inViewProp[2])
    // const storiesViews = allInViewProps.map((inViewProp) => inViewProp[1])
    const carousel_ref = useRef()
    const current_story = storiesViews.findIndex((s) => s == true)

    function updateCurrentSection(e){
        console.log(e.target.scrollLeft)
        console.log("offeset: " + storiesEntries[currentSection].target.offsetLeft + " width: " + storiesEntries[currentSection].target.offsetWidth)
        if(current_story == -1){
            return null
        }else{
            setCurrentSection((p) => current_story)
        }
        // console.log(currentSection)
    }
    const onMobile = useCheckMobileScreen()
    function customMoveLeft(e){
        if(currentSection == 0){
            return null
        }
        const offsetLeft = storiesEntries[currentSection - 1].target.offsetLeft;
        const width = storiesEntries[currentSection - 1].target.offsetWidth;
        carousel_ref.current.scrollTo({left: offsetLeft - 0.3*width})
    }

    function customMoveRight(e){
        if(currentSection == storiesEntries.length - 1){
            return null
        }
        
        const offsetRight = storiesEntries[currentSection + 1].target.offsetLeft;
        const width = storiesEntries[currentSection + 1].target.offsetWidth;
        console.log("current: " + currentSection + " " + (storiesEntries.length - 2))
        // if(currentSection == storiesEntries.length - 2){
        //     console.log("hello!!")
        //     console.log(offsetRight)
        //     carousel_ref.current.scrollTo({right: 1396   })
        //     return null 
        // }
        carousel_ref.current.scrollTo({left: offsetRight - 0.3*width})
    }
    return(
        <div className = "stories-container">
        <div className = "stories-head">
            My Stories
        </div>
        <div className = "story-carousel-container" onScroll={updateCurrentSection} ref={carousel_ref}>
            
            {/* <div className = "story-container" onMouseOver={MouseOver} onMouseOut={MouseOut}></div>
            <div className = "story-container" onMouseOver={MouseOver} onMouseOut={MouseOut}></div>
            <div className = "story-container" onMouseOver={MouseOver} onMouseOut={MouseOut}></div>
            <div className = "story-container" onMouseOver={MouseOver} onMouseOut={MouseOut}></div> */}
        {stories_data.stories.map((item, idx) => (
            <StoryCard image_url = {item.story_img_url} 
                story_head = {item.story_id} 
                story_url = {item.story_url} 
                story_ref = {storiesRef[idx]}     
                id = {"story-container-"+ idx}
                class_addon = {
                    !onMobile ? "" : 
                    currentSection == idx ? "" :
                    currentSection < idx  ? " not-focused-right" :
                    currentSection > idx  ? " not-focused-left" : 
                    "" 
                }
                ></StoryCard>
            ))}
        {onMobile && <div className='story-container-buffer'></div>}
        </div>
        {onMobile && <ToggleButton id={!isSafari ? "toggle-button-stories" : "toggle-button-stories-safari"} entries={storiesEntries} views={storiesViews} allSectionViews={props.allSectionViews} allSectionEntries={props.allSectionEntries} current_idx={currentSection} moveLeft={customMoveLeft} moveRight={customMoveRight}></ToggleButton>}

        </div>

    )
}