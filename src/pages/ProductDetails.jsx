import React from "react";
import HeaderLine from "../components/Tittles/HeaderLine";
import { useLocation } from "react-router-dom";
import crumb from "../assets/imgs/crumb.jpg";
import CardDetails from "../components/card/CardDetails";
import products from "../api/Data";
const ProductDetails = () => {
  const location = useLocation();
  let pathName = location.pathname;
  pathName = pathName.split("/");
  const currentName = pathName[2];
  const currentId = pathName[3];
  const product = products.find((prod) => prod.id === +currentId);
  console.log(pathName);
  return (
    <div className="product-details">
      <div className="crumb relative">
        <div className="crumb-img h-[483px] w-full relative">
          <img src={crumb} alt="" className="h-full w-full rounded-[16px]" />
        </div>
        <h4 className="crumb-text text-[20px]">
          {pathName[1]} - <span>{currentName}</span>
        </h4>
      </div>
      <div className="container">
        <HeaderLine
          heading={"Explore your Selling"}
          desc={"Explore your Selling"}
        />
        <CardDetails product={product} />
      </div>
    </div>
  );
};

export default ProductDetails;
