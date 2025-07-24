import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import blogPosts from "./BlogData";
import "../Blog/Blog.css"

function BlogCard() {
  return (
    <Container>
      <div className="text-center">
        <div className="blog_main_heading">
          <h2 className="why_choose_fougito pb-4">Blog Posts</h2>
        </div>
        <div className="blog_card_parent d-flex flex-wrap gap-3 p-3 p-lg-0 text-center">
          {blogPosts.map((post) => (
            <div className="blog_card_child_main rounded col-4 text-white" style={{ backgroundImage: `url(${post.featuredImage})`}}>
              <div key={post.slug} className="blog_card_content p-3">
                <Link to={`/blog/${post.slug}`} className="text-decoration-none text-white">
                <h4>{post.title}</h4>
                </Link>
                <p>{post.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default BlogCard;
