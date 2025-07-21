import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Components/GlobalComponent/Header/Header";
import AllRoutes from "./Routes/AllRoutes";
import BotomFooter from "./Components/GlobalComponent/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <AllRoutes />
        <BotomFooter />
      </Router>
    </div>
  );
}

export default App;
