import { NavLink } from "react-router-dom";
import "../FougitoSolution/FougitoSolution.css"
import "../ReliableComponent/Reliable.css"


import BusinessImage from "../../../Assests/Images/business.webp"

function Reliable(){

    return(
        <div style={{background:"#FEF2F2"}} className="container-fluid p-lg-0 mt-5">
            <div className="custom_container fougito_solution_parent d-flex flex-column flex-lg-row pt-5 pb-5 p-lg-5">
                <div className="fougito_second_child fougito_about_img d-flex justify-content-center align-item-center col-12 col-xl-6 text-center text-lg-center">
                    <img src={BusinessImage} alt="fougito_about_img" className="w-100"></img>
                </div>
                <div className="fougito_first_child col-12 col-xl-6 d-flex justify-content-center align-items-center pt-5 pt-xl-0">
                    <div className="fougito_content">
                        <h2>
                            Reliable, secure and<br></br>ready to do business
                        </h2>
                        <p>Fougito is the perfect match for your company’s values. We understand how your business operates and that’s exactly why we have built solutions that are just right for you. We take pride in providing a centric solution to our clients in all areas of the Food and Beverage, Automobiles, OR Real Estate industry. Boost your business profits with flair!</p>
                        <p>Contact us today to book your demo and experience the luxury of digitisation the Fougito way.</p>
                        <div className="mt-4"><NavLink className="service_btn_2" to="#">Get in touch</NavLink></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reliable;