import React from "react";
import blog from "../../images/blog/React Cover.jpg";
import "./BlogCard.css";
const BlogCard = () => {
  return (
    <div className="col-md-4 blog-col">
      <div className="blog-card">
        <img
          src="https://cdn.hashnode.com/res/hashnode/image/upload/v1679947746854/32411882-ad76-466f-bf5b-a4c1d13f8db2.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
          className="img-fluid mb-2"
        />
        <p className="blog-title pl-3 pr-3">Clean Code Idea For React.js</p>
        <p className="blog-details pl-3 pr-3">
          Background idea: The first question that comes to our mind before implementing something is why we need to implement it. The
          reason behind using clean code is that it makes ...
        </p>
        <div className="d-flex justify-content-end">
          <a href="https://fariakarim.hashnode.dev/clean-code-idea-for-reactjs" target="_blank">
            <button className="blog-button">READ</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
