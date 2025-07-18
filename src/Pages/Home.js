import React from "react";
import Services from "../Components/HeroSection/Services";
import FougitoSoluton from "../Components/FougitoSolution/FougitoSolution";
import OurSolution from "../Components/OurSolution/OurSolution";
import GreenInovation from "../Components/GreenInovation/GreenInovation";
import Reliable from "../Components/ReliableComponent/Reliable";
import FougitoApp from "../Components/FougitoApp/FougitoApp";

function HomePage(){

    return(
        <div className="home-page">
            <Services />
            <FougitoSoluton />
            <OurSolution />
            <GreenInovation />
            <Reliable />
            <FougitoApp />
        </div>
    )
}

export default HomePage;