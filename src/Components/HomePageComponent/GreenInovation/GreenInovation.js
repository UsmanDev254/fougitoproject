import { Container, NavLink } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import "../GreenInovation/GreenInovation.css"

import GreenInovationImg from "../../../Assests/Images/plant-conserve-banner.jpg"



function GreenInovation(){
    return(
        <Container className="mt-5 p-0 p-lg-5 custom_container container">
            <div className="inovation_parent p-5 d-flex justify-content-center" style={{backgroundImage:`url(${GreenInovationImg})`}}>
                <div className="inovation_child text-white text-center p-0 p-lg-5 m-auto">
                    <h2 className="inovation_top_heading">Your Leading</h2>
                    <h2 className="Inovation_main_heading">Green Innovation</h2>
                    <p>With our sustainable business and mobile POS solution, we maintain responsibility with regards to the environment. This is why Fougito services are tailored to provide user-friendly POS mobile solutions, paperless billing, and digitising day to day operations.</p>
                    <NavLink to={'#'}><FontAwesomeIcon className="custom_right_arrow" icon={faArrowRight}></FontAwesomeIcon></NavLink>
                </div>
            </div>
        </Container>
    );
}


export default GreenInovation;