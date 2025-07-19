import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Components/Header/Header";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <AllRoutes />
      </  Router>
    </div>
  );
}

export default App;
