import React from "react";
import Crumb from "../components/Banner/Crumb";
import HeaderLine from "../components/Tittles/HeaderLine";
import ContactSection from "../components/Sections/ContactSection";
const Contact = () => {
  return (
    <div className="contact p-4 relative">
      <Crumb />
      <div className="container">
        <HeaderLine heading={"Send Us Message"} desc={"send us message"} />
        <ContactSection />
      </div>
    </div>
  );
};

export default Contact;
