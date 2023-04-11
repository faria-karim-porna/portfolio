import React, { useEffect } from "react";
import BlogCard from "../BlogCard/BlogCard";
import "./Blog.css";
import Aos from "aos";
import "aos/dist/aos.css";
const Blog = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <body>
      <div className="container blog" data-aos="fade-right" id="blog">
        <p className="home-section-name">Some Of My Blogs</p>
        <div className="d-flex justify-content-center">
          <div className="home-section-underline mb-5"></div>
        </div>
        <div className="row">
          <BlogCard></BlogCard>
          {/* <BlogCard></BlogCard>
          <BlogCard></BlogCard> */}
        </div>
        {/* <p className="blog-more">. . . . . . . . . . . . . . . SEE MORE . . . . . . . . . . . . . . .</p> */}
      </div>
    </body>
  );
};

export default Blog;
