import React from "react";
import Services from "../Components/HeroSection/Services";
import FougitoSoluton from "../Components/FougitoSolution/FougitoSolution";

function HomePage(){

    return(
        <div className="home-page">
            <Services />
            <FougitoSoluton />
        </div>
    )
}

export default HomePage;