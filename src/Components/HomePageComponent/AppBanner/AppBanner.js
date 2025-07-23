import { Container, NavLink } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import "../GreenInovation/GreenInovation.css"
import "../AppBanner/AppBanner.css"

import PlayStore from "../../../Assests/Images/play_store.webp"
import AppStore from "../../../Assests/Images/app_store.webp"
import AppScreens from "../../../Assests/Images/app.webp"



function AppBanner(){
    return(
        <Container className="mt-5 custom_container">
            <div className="fougito_app_parent rounded p-3 ps-lg-5 pe-lg-5 mb-5 d-column d-lg-flex justify-content-center align-items-center" style={{background:"#F05152"}}>
                <div className="fougito_app_child text-white col-12 col-lg-6">
                    <h2 className="fougito_app_main_heading">Get Started with the <br></br> Fougito App Today</h2>
                    <p> Grow your restaurant’s business with the Fougito Mobile POS solution.</p>
                    <div className="d-flex text-start w-75">
                        <NavLink to={'#'}><img src= {PlayStore} alt="play_store" className="playstore"></img></NavLink>
                        <NavLink to={'#'}><img src= {AppStore} alt="app_store" className="appstore"></img></NavLink>
                    </div>
                </div>
                <div className="col-12 col-lg-6 app_screen_img text-center text-lg-end">
                    <img src={AppScreens} alt="app_screen"></img>
                </div>
            </div>
        </Container>
    );
}


export default AppBanner;