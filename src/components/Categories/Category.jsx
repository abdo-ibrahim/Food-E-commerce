import React from "react";
import "../../styles/components/Categories/Category.css";
import { FaCheck } from "react-icons/fa";

const Category = ({ catId, nameCat, curId, setCurId, onClick }) => {
  return (
    <div
      className="cat relative cursor-pointer"
      onClick={() => {
        setCurId(catId);
        onClick();
      }}
    >
      {curId === catId && (
        <div className={`cat-check`}>
          <FaCheck className="text-xl" />
        </div>
      )}

      <div
        className={`cat-img w-[180px] h-[180px] relative ${
          curId === catId ? "selected" : ""
        }`}
      >
        <img
          src={"./assets/imgs/crumb.jpg"}
          alt="Category"
          className="h-full w-full rounded-full"
        />
        <div className="title mt-8 cursor-pointer">
          <h4 className="text-center text-xl font-semibold">{nameCat}</h4>
        </div>
      </div>
    </div>
  );
};

export default Category;
