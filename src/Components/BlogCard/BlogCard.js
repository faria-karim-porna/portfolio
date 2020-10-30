import React from 'react';
import blog from '../../images/blog/React Cover.jpg';
import './BlogCard.css';
const BlogCard = () => {
    return (
       
            <div className ="col-md-4 blog-col">
                        <div className = "blog-card">
                            <img src = {blog} className = "img-fluid mb-2"/>
                            <p className = "blog-title pl-3 pr-3">Introduction to React.js</p>
                            <p className = "blog-details pl-3 pr-3">React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</p>
                            <div className = "d-flex justify-content-end"><button className = "blog-button">READ</button></div>
                        </div>
            </div>
    );
};

export default BlogCard;