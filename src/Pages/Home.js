import React from "react";
import Services from "../Components/HeroSection/Services";
import FougitoSoluton from "../Components/FougitoSolution/FougitoSolution";
import OurSolution from "../Components/OurSolution/OurSolution";

function HomePage(){

    return(
        <div className="home-page">
            <Services />
            <FougitoSoluton />
            <OurSolution />
        </div>
    )
}

export default HomePage;