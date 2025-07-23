import React from "react";
import Services from "../Components/HomePageComponent/HeroSection/Services";
import FougitoSoluton from "../Components/HomePageComponent/FougitoSolution/FougitoSolution";
import OurSolution from "../Components/HomePageComponent/OurSolution/OurSolution";
import GreenInovation from "../Components/HomePageComponent/GreenInovation/GreenInovation";
import Reliable from "../Components/HomePageComponent/ReliableComponent/Reliable";
import FougitoApp from "../Components/HomePageComponent/FougitoApp/FougitoApp";
import Toogle from "../Components/HomePageComponent/Toogle/Toogle";
import AppBanner from "../Components/HomePageComponent/AppBanner/AppBanner";
import BlogCard from "../Components/HomePageComponent/Blog/BlogOverview";
import Header from "../Components/GlobalComponent/Header/Header";


function HomePage(){

    return(
        <div className="home-page">
            <Header />
            <Services />
            <FougitoSoluton />
            <OurSolution />
            <GreenInovation />
            <Reliable />
            <FougitoApp />
            <Toogle />
            <AppBanner />
            <BlogCard />
        </div>
    )
}

export default HomePage;