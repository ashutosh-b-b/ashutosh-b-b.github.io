import React, { useState } from 'react';
import NavBar from '../components/navbar.js'
import Hero from '../components/hero.js'
import Experience from '../components/experience.js'

import ContactBar from '../components/contactbar'
import MediaCard from '../components/projects.js'

import Blogs from '../components/blogs.js'
import StoriesCarousel from '../components/stories.js'

import { useInView } from "react-intersection-observer";


import "../styles/home.css"

function Home() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [section1Ref, section1InView, section1Entry] = useInView({ threshold: 0.5 });
  const [section2Ref, section2InView, section2Entry] = useInView({ threshold: 0.5 });
  const [section3Ref, section3InView, section3Entry] = useInView({ threshold: 0.5 });
  const [section4Ref, section4InView, section4Entry] = useInView({ threshold: 0.5 });
  const [section5Ref, section5InView, section5Entry] = useInView({ threshold: 0.5 });


  return (
    <div>
      <NavBar sectionviews = {[section1InView, section2InView, section3InView, section4InView, section5InView]} 
              sectionrefs = {[section1Ref, section2Ref, section3Ref, section4Ref, section5Ref]} 
              entries = {[section1Entry, section2Entry, section3Entry, section4Entry, section5Entry]} 
      ></NavBar>
      <div class = "body-wrapper">
        <section className='section-container' ref = {section1Ref}> 
          <Hero></Hero>
          <ContactBar></ContactBar>
        </section>
        <section className='section-container' ref = {section2Ref}>
          <Experience></Experience>
        </section>
        <section className='section-container' id = "project-section" ref = {section3Ref}>
          <MediaCard />
        </section>
        <section className='section-container' id = "blog-section" ref = {section4Ref}>
          <Blogs />
        </section>
        <section className='section-container' id = "stories-section" ref = {section5Ref}>
          <StoriesCarousel />
        </section>
      </div>
    </div>
  );
}

export default Home