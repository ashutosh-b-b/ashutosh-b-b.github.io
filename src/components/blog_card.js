import React, { useState } from 'react';
import "../styles/blogs.css"


function BlogCard(props) {
    function redirect_blog(){
        window.open(props.blog.blog_url, '_blank')
    }
    return(
        <div className = 'blog-card' onClick={redirect_blog}>
    <div className = 'blog-head'>{props.blog.blog_head}</div>
    <div className = 'blog-description'>{props.blog.blog_txt}</div>
    <div class="go-corner" href="#">
        <div class="go-arrow">
            →
        </div>
    </div>
    </div>
    )
}
export default BlogCard