import React from "react";

const HeaderLine = ({ heading, desc }) => {
  return (
    <div className="header-line my-12 text-center">
      <p className="text-[20px] uppercase">{desc ? desc : ""}</p>
      <h2 className="uppercase text-[50px] md:text-[65px] mt-[-15px]">
        {heading}
      </h2>
    </div>
  );
};

export default HeaderLine;
