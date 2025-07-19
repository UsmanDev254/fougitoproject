import React, { useState } from "react";
import { Container } from "react-bootstrap"
import "../Toogle/Toogle.css";

const data = [
  {
    title: "All in one",
    content:
      "At Fougito, we offer a centric solution, spanning industries from food to automobiles to groceries. Simplifying your business, we connect you with customers effortlessly, ensuring comprehensive coverage across platforms.",
  },
  {
    title: "Restaurant Management",
    content:
      "Manage restaurant orders, billing, tables and customers all in one place with ease and efficiency.",
  },
  {
    title: "POS System",
    content:
      "Get the best POS system that suits your business and keeps everything tracked, simple, and fast.",
  },
  {
    title: "Inventory Tracking",
    content:
      "Track your stock levels in real-time and never run out of essential items.",
  },
  {
    title: "Analytics Dashboard",
    content:
      "Visualize your sales, performance and customer data in a clean and powerful dashboard.",
  },
];

function Toogle() {
  const [activeIndex, setActiveIndex] = useState(0); // First open by default

//   first method by arrow function with ternary operator    

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };


//   second method by simple if else condition 

//   function handleToggle(index) {
//   if (activeIndex === index) {
//     setActiveIndex(null);
//   } else {
//     setActiveIndex(index);
//   }
// }


  return (
    <Container className="w-75 pe-4 ps-4 mt-5 mb-5 custom_width_toogle">
      <h2 className="text-center pb-3 why_choose_fougito">Why choose Fougito?</h2>
      <div className="toogle_main">
        {data.map((item, index) => (
          <div key={index} className={`faqs_item_main mb-3 p-3 rounded ${activeIndex === index ? "active" : '' }`}>
            <h4
              onClick={() => handleToggle(index)}
              style={{ cursor: "pointer" }}
            >
              {item.title}
            </h4>
            
            {/* first method to show content with ternory operator */}

            {/* {activeIndex === index ? (
              <p className="mt-2 text-muted">{item.content}</p>
            ):null} */}

            {/* second method to show content with and operator */}

            {activeIndex === index && (
              <p className="mt-2 text-muted">{item.content}</p>
            )}

          </div>
        ))}
      </div>
    </Container>
  );
}

export default Toogle;
