import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import blogPosts from "../Components/HomePageComponent/Blog/BlogData";
import "../Assests/Styles/Blogs.css";

function BlogDetail() {
  const { slug } = useParams();

  // ✅ Find the blog using slug from URL
  const blog = blogPosts.find((item) => item.slug === slug);

  // ✅ Handle not found case
  //   if (!blog) {
  //     return (
  //       <Container>
  //         <div className="mt-5 pt-5 text-center">
  //           <h2>Blog not found</h2>
  //         </div>
  //       </Container>
  //     );
  //   }

  return (
    <>
      <div className="container-fluid p-0">
        <img
          src={blog.featuredImage}
          alt="featured_img"
          className="post_featured_img"
        ></img>
      </div>
      <Container>
        <div className="text-center mt-5 rounded p-5 post_content_main">
          <h2>{blog.title}</h2>
          <p>{blog.description}</p>{" "}
          {/* Change to blog.content if you add full content */}
        </div>
      </Container>
    </>
  );
}

export default BlogDetail;
