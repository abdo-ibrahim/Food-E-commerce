import React from "react";
import "../../styles/components/Banner/Banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner center-flex rounded-[10px] h-screen">
      <div className="info text-center">
        <h1>Crafting your Exceptional Dining Reservations</h1>
        <p>
          Reservation is a step into a world of gastronomic wonder. Reserve your
          table today and let us paint your culinary dreams into reality.
        </p>
        <Link to="/shop" className="btn-red">
          Explore Products
        </Link>
      </div>
    </div>
  );
};

export default Banner;
