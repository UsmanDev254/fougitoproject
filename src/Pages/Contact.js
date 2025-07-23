
import "../Assests/Styles/Style.css"

import AppBackgroundImage from "../Assests/Images/pos_bg.661adca781cdd1b8.webp";
import HeaderWhite from "../Components/GlobalComponent/Header/WhiteBgHeader";
import ContactForm from "../Components/GlobalComponent/Form/Form";

function Contact() {
  return (
    <>
      <HeaderWhite />
      <div
        style={{
          background: `url(${AppBackgroundImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="container-fluid p-lg-0 mt-0 mt-lg-5 pt-0 pt-lg-5"
      >
        <div className="container app_parent pt-5 pb-5">
          <div className="contact_box_parent d-flex flex-column w-75 justify-content-center align-items-center text-center m-auto gap-4 pt-5">
            <div className="contact_us_content">
              <h2>Unlock your business potential Reach out to us today</h2>
              <p>
                Effortlessly invite sustainable success into your journey and
                let Fougito Business Solutions simplify your life
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
      <div className="col-12">
        <div className="contact-content">
          <iframe
            style={{
              width: "100%",
              height: "570px",
              border: "0",
              borderRadius: "20px",
            }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.359718162535!2d68.3473110741602!3d25.36727102479334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c71772af091bd%3A0xe1704448fed385a6!2sVicky%20Media%20Solutions%20-%20Digital%20Marketing%20-%20Institute%20-%20Graphic%20%26%20Web%20Design%20-%20Social%20Media%20Marketing%20-%20Branding-%20E-Commerce!5e1!3m2!1sen!2s!4v1731101130591!5m2!1sen!2s"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Contact;
