import React, { useEffect, useState } from "react";
import Crumb from "../components/Banner/Crumb";
import HeaderLine from "../components/Tittles/HeaderLine";
import ShowProducts from "../components/Categories/ShowProducts";
import Categories from "../components/Categories/Categories";
import products from "../api/Data";

const Shop = () => {
  const [curCat, setCurCat] = useState("burger");
  const [filterProducts, setFilterProducts] = useState([]);
  useEffect(() => {
    setFilterProducts(products.filter((prod) => prod.cat === curCat));
  }, [curCat]);

  return (
    <div className="shop p-4 relative">
      <Crumb />
      <HeaderLine heading={"Shop by category"} desc={"Shop by category"} />
      <div className="container">
        <Categories setCurCat={setCurCat} />
        <ShowProducts products={filterProducts} />
      </div>
    </div>
  );
};

export default Shop;
