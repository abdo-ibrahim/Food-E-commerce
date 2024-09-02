import React from "react";
import Crumb from "../components/Banner/Crumb";
import HeaderLine from "../components/Tittles/HeaderLine";

const About = () => {
  return (
    <div className="about p-4 relative">
      <Crumb />
      <HeaderLine heading={"About Our Story"} desc={"About Our Story"} />
    </div>
  );
};

export default About;
