import React, { useState } from 'react';
import "../styles/blogs.css"
import blogs_data from "../assets/blog_meta.json";
import BlogCard from "./blog_card"
function Blog() {
  // Declare a new state variable, which we'll call "count"

  const [count, setCount] = useState(0);
  return (
    <div className='blogs-main-container'>
        <div className = 'blogs-head'>Blogs</div>
        <div className = 'blogs-container'>

            {blogs_data.blogs.map((blog) => (
                <BlogCard blog = {blog}></BlogCard>
            ))}

    </div>

    </div>

  );
}

export default Blog