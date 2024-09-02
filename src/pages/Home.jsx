import React from "react";
import Banner from "../components/Banner/Banner";
import HeaderLine from "../components/Tittles/HeaderLine";
import MostSelling from "../components/Categories/MostSelling";
import VideoPlay from "../components/Sections/VideoPlay";
import toast, { Toaster } from "react-hot-toast";
const Home = () => {
  return (
    <div className="p-4 relative">
      <div>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
      <Banner />
      <HeaderLine heading={"most selling"} desc={"most selling"} />
      <MostSelling />
      <VideoPlay />
    </div>
  );
};

export default Home;
