import React, { useState } from 'react';
import "../styles/blogs.css"
import blogs_data from "../assets/blog_meta.json";
import BlogCard from "./blog_card"
import ToggleButton from './toggle_button';
import useCheckMobileScreen from './useMobileCheck'
import { useInView } from "react-intersection-observer";

function Blog(props) {
  // Declare a new state variable, which we'll call "count"
  const [blog1Ref, blog1InView, blog1Entry] = useInView({ threshold: 0.8 });
  const [blog2Ref, blog2InView, blog2Entry] = useInView({ threshold: 0.8 });
  const [blog3Ref, blog3InView, blog3Entry] = useInView({ threshold: 0.8 });
  const [blog4Ref, blog4InView, blog4Entry] = useInView({ threshold: 0.8 });

  const blogsRef = [blog1Ref, blog2Ref, blog3Ref, blog4Ref]
  const blogsEntries = [blog1Entry, blog2Entry, blog3Entry, blog4Entry]
  const blogViews = [blog1InView, blog2InView, blog3InView, blog4InView]

  const onMobile = useCheckMobileScreen()
  const [count, setCount] = useState(0);
  return (
    <div className='blogs-main-container'>
        <div className = 'blogs-head'>Blogs</div>
        <div className = 'blogs-container'>

            {blogs_data.blogs.map((blog, idx) => (
                <BlogCard blog = {blog}  section_ref={blogsRef[idx]} class_addon={onMobile && blogViews[idx] ? " hovered" : ""}></BlogCard>
            ))}

    </div>
    {onMobile && <ToggleButton id={"toggle-button-blogs"} entries={blogsEntries} views={blogViews} allSectionViews={props.allSectionViews} allSectionEntries={props.allSectionEntries}></ToggleButton>}
    </div>

  );
}

export default Blog