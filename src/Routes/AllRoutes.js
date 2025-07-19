import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";

function AllRoutes() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default AllRoutes;
