import React from "react";
import { useState } from "react";

function ContactForm() {
  // To get fields value
  const [name, updateName] = useState("");
  const [email, updateEmail] = useState("");
  const [phone, updatePhone] = useState("");
  const [message, updateMessage] = useState("");

  //  To show error fields
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [messageError, setMessageError] = useState("");


  // First Method of email validation

  function getEmail(e) {
    let item = e.target.value;
    const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; // Removed 'g' flag

    if (!isValidEmail.test(item)) {
      setEmailError(true); // Show "Required" if the field is empty
    } else {
      setEmailError(false); // Clear error if email is valid
    }

    updateEmail(item);
  }

  // Second Method of email validation

  // function getEmail(e) {
  //   let item = e.target.value;
  //   const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  //   if (!item) {
  //     setEmailError('Required');  // Show "Required" if the field is empty
  //   }
  //   else if (!isValidEmail.test(item)) {
  //     setEmailError('Invalid email address');  // Show "Invalid email" if regex fails
  //   }
  //   else {
  //     setEmailError('');  // No error if email is valid
  //   }

  //   updateEmail(item);
  // }



//   Show Error on Length base 

    function getName(e) {
    let item = e.target.value;
    if (item.length < 5) {
      setNameError(true);
    } else {
      setNameError(false);
    }
    updateName(item);
  }

  function getPhone(e) {
    let item = e.target.value;
    if (item.length < 5) {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }
    updatePhone(item);
  }

  function getMessage(e) {
    let item = e.target.value;
    if (item.length > 500) {
      setMessageError(true);
    } else {
      setMessageError(false);
    }
    updateMessage(item);
  }

  
  // First method of handle form submitting method

  //  // Form submit button handling
  //  const formHandle = (e) => {
  //   e.preventDefault();

  //   // Check for empty or invalid fields and set error messages
  //   let Validation = true;

  //   if (name.length < 5) {
  //     setNameError("Name must be at least 5 characters long.");
  //     Validation = false;
  //   }
  //   if (!email || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
  //     setEmailError(true);
  //     Validation = false;
  //   }
  //   if (phone.length < 5) {
  //     setPhoneError(true);
  //     Validation = false;
  //   }
  //   if (message.length > 500) {
  //     setMessageError(true);
  //     Validation = false;
  //   }

  //   if (Validation) {
  //     console.log(name + "\n" + email + "\n" + phone + "\n" + message);
  //   }

  // Reset all form fields after submission
  // updateName("");
  // updateEmail("");
  // updatePhone("");
  // updateMessage("");

  // };

  // Second method of handle form submitting validation

  function formHandle(e) {
    e.preventDefault();

    // Check for empty fields and set error messages
    if (!name.trim()) {
      setNameError(true);
    } else {
      setNameError(false);
    }

    if (!email.trim()) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    if (!phone.trim()) {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }

    if (message.length > 500) {
      setMessageError(true);
    } else {
      setMessageError(false);
    }

    // If all fields are filled, log values
    if (name.trim() && email.trim() && phone.trim() && message.trim()) {
      console.log(name + "\n" + email + "\n" + phone + "\n" + message);

      // Reset all form fields after submission
      updateName("");
      updateEmail("");
      updatePhone("");
      updateMessage("");
    } else {
      console.log("Please fill in all fields correctly.");
    }
  }

  return (
    <>
      <div className="container contact_form_main">
        <form onSubmit={formHandle} className="row">
              <div className="col-12">
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  value={name}
                  onChange={getName}
                  className="px-3 py-2 border-0 rounded"
                />
                <br></br>
                {nameError ? (
                  <p className="error_message text-danger text-start w-50 m-auto">Enter Valid Name</p>
                ) : null}
                <br />
              </div>
              <div className="col-12">
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={getEmail}
                  className="px-3 py-2 border-0 rounded"
                />
                <br></br>
                {emailError && (
                  <p className="error_message text-danger text-start w-50 m-auto">
                    Enter Valid Email Address
                  </p>
                )}
                <br />
              </div>
              <div className="col-12">
                <input
                  type="number"
                  id="phone"
                  placeholder="Your Phone"
                  value={phone}
                  onChange={getPhone}
                  className="px-3 py-2 border-0 rounded"
                />
                <br></br>
                {phoneError ? (
                  <p className="error_message text-danger text-start w-50 m-auto">
                    Enter Correct Phone Number
                  </p>
                ) : (
                  ""
                )}
                <br />
              </div>
              <div className="col-12">
                <textarea
                  onChange={getMessage}
                  value={message}
                  style={{ height: "100px", padding: "10px" }}
                  id="message"
                  placeholder="Your Message"
                  data-gramm="false"
                  className="px-3 py-2 border-0 rounded"
                ></textarea>
                <br></br>
                {messageError ? (
                  <p className="error_message text-danger text-start w-50 m-auto">
                    You are Out of content Limit
                  </p>
                ) : (
                  ""
                )}
                <br />
                <button type="submit" className="submit_btn rounded bg-danger px-3 py-2 border-0 text-white">
                    Submit Now
                </button>
              </div>
            </form>
      </div>
    </>
  );
}

export default ContactForm;
