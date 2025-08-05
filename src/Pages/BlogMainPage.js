import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import blogPosts from "../Components/HomePageComponent/Blog/BlogData";
import "../Components/HomePageComponent/Blog/Blog.css";
import HeaderWhite from "../Components/GlobalComponent/Header/WhiteBgHeader";

import BlogBanner from "../Assests/Images/blog.9c87822fee54d545.webp";

import { useState } from "react";

function BlogCard() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBlogs = blogPosts.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <HeaderWhite />
      <div
        className="bg-blog-bg bg-cover py-24 lg:py-28"
        style={{ background: `url(${BlogBanner})`, backgroundSize: "cover" }}
      >
        <div className="w-[90%] lg:w-[65%] 2xl:w-[60%] mx-auto text-center">
          <h1 className="font-bold text-gray-800 text-[28px] lg:text-[43px]">
            Fougito Blogs
          </h1>
          <p className="font-medium text-gray-800 text-base lg:text-xl pt-1">
            Welcome to Fougito blog, a space where ideas come to life. Explore
            insightful articles, stay informed on the latest trends, and connect
            with a community that shares a passion for Fougito.
          </p>
        </div>
      </div>
      <Container>
        <div className="text-center pt-5 pb-5">
          <div className="blog_main_heading">
            <h2 className="why_choose_fougito pb-4">Latest Blogs</h2>
          </div>
          <div className="filtering_blog_main">
            <div className="search_blog text-left md:w-[50%] lg:w-[25%] bg-[#1817170d] rounded-5">
              <input
                type="text"
                placeholder="Search blogs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-100 px-3 py-2 rounded-5 bg-transparent"
              />
            </div>
          </div>
          <div className="blog_card_parent d-flex flex-wrap gap-3 p-3 p-lg-0 text-center">
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((post) => (
                <div className="relative rounded-lg w-full mt-4 md:w-[48%] lg:w-[32%] h-44 lg:h-60">
                  {/* Image */}
                  <img
                    loading="lazy"
                    src={post.featuredImage}
                    alt="Restaurant Management system"
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />

                  {/* Content Box */}
                  <div className="w-full flex justify-center items-center">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="group absolute bottom-5 w-[90%] bg-white rounded-lg flex flex-col justify-between p-3 lg:p-4"
                    >
                      {/* Title */}
                      <p className="text-left text-decoration-none font-medium text-zinc-700 text-sm lg:text-[16px] pt-1 leading-5 line-clamp-2 lg:w-[85%]">
                        {post.title}
                      </p>

                      {/* Footer */}
                      <div className="flex justify-end items-center w-full mt-2">
                        <div className="px-3 py-2 lg:px-3 lg:py-2 rounded-full w-fit text-white bg-[#F05152] flex items-center justify-center">
                          {/* Arrow Icon */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="12"
                            width="10"
                            viewBox="0 0 448 512"
                            className="group-hover:animate-pulse"
                            fill="currentColor"
                          >
                            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <p>No blogs found matching your search.</p>
            )}
          </div>
        </div>
      </Container>
    </>
  );
}

export default BlogCard;
