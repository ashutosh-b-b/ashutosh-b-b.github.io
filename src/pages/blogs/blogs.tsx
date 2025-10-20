import './blogs.css'
import blogsData from '../../assets/blogs/blogsData.json';

// interface BlogItem {
//     head: string;
//     text: string;
//     url: string;
// }

export default function Blogs(){
    const handleBlogClick = (url: string) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };
    return (
        <div id="blogs" className="blogs-container">
        <div className="blogs-header">
            <h1>Latest Blogs</h1>
            {/* <p>Thoughts, ideas, and stories from my journey</p> */}
        </div>

        <div className="blogs-grid">
            {blogsData.items.map((blog, index) => (
                <div
                    key={index}
                    className="blog-card"
                    onClick={() => handleBlogClick(blog.url)}
                >
                    <div className="quarter-circle"></div>
                    <span className="arrow-indicator">→</span>
                    <div className="blog-card-content">
                        <h2 className="blog-title">{blog.head}</h2>
                        <p className="blog-subtitle">{blog.text}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
    )
}