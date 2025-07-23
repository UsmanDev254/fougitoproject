import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import BlogDetail from "../Pages/BlogDetailPage";
import AboutPage from "../Pages/About";


function AllRoutes() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
