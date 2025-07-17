import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../FougitoSolution/FougitoSolution.css"


import FougitoImage from "../../Assests/Images/convinience.webp"

function FougitoSoluton(){

    return(
        <Container className="custom_container">
            <div className="fougito_solution_parent d-flex flex-column-reverse flex-lg-row pt-5 pb-5 p-lg-5">
                <div className="fougito_first_child col-12 col-xl-6 d-flex justify-content-center align-items-center pt-5 pt-xl-0">
                    <div className="fougito_content">
                        <h2>
                            Fougito solutions<br></br> all you need, all in one
                        </h2>
                        <p>Experience the ease of one app for all your restaurant management, food deliveries, grocery, and automobile requirements with the Fougito App.</p>
                        <p>Elevate your routine with Fougito's integrated approach to daily living.</p>
                        <div className="mt-4"><NavLink className="service_btn_2" to="#">View More</NavLink></div>
                    </div>
                </div>
                <div className="fougito_second_child fougito_about_img col-12 col-xl-6 text-center text-lg-end">
                    <img src={FougitoImage} alt="fougito_about_img" className="w-100"></img>
                </div>
            </div>
        </Container>
    );
}

export default FougitoSoluton;