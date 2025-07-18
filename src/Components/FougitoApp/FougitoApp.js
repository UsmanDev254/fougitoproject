import { NavLink } from "react-router-dom";
import "../FougitoSolution/FougitoSolution.css"
import "../FougitoApp/FougitoApp.css"


import AppBackgroundImage from "../../Assests/Images/pos_bg.661adca781cdd1b8.webp"
import AppImage from "../../Assests/Images/Appshot.png"

function FougitoApp(){

    return(
        <div style={{background:`url(${AppBackgroundImage})`, backgroundSize: "cover",backgroundRepeat: "no-repeat", backgroundPosition:"center"}} className="container-fluid p-lg-0 mt-5">
            <div className="custom_container app_parent pt-5 pb-5 p-lg-5">
                <div className="app_first_child d-flex flex-column justify-content-center align-items-center text-center pt-xl-0">
                    <div className="fougito_content app_content">
                        <h2>
                            Reliable, secure and<br></br>ready to do business
                        </h2>
                        <p>Fougito is the perfect match for your company’s values. We understand how your business operates and that’s exactly why we have built solutions that are just right for you. We take pride in providing a centric solution to our clients in all areas of the Food and Beverage, Automobiles, OR Real Estate industry. Boost your business profits with flair!</p>
                        <p>Contact us today to book your demo and experience the luxury of digitisation the Fougito way.</p>
                        <div className="mt-4"><NavLink className="service_btn_2" to="#">Get in touch</NavLink></div>
                    </div>
                    <div className="app_img">
                        <img src={AppImage} alt="app_img"></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FougitoApp;