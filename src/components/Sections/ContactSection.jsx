import React from "react";
import "../../styles/components/Sections/ContactSection.css";
const ContactSection = () => {
  return (
    <div className="contact-container">
      <div className="inp-container grid gap-7 grid-cols-1 md:grid-cols-3">
        <div className="inp">
          <input type="text" placeholder="Your name" />
        </div>
        <div className="inp">
          <input type="tel" placeholder="+20 123 456 7890" />
        </div>
        <div className="inp">
          <input type="text" placeholder="Subject" />
        </div>
      </div>
      <textarea name="" id="" placeholder="Message"></textarea>
      <input type="submit" value="Send Message" className="send btn md:w-fit" />
    </div>
  );
};

export default ContactSection;
