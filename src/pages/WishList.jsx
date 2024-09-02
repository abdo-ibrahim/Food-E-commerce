import React from "react";
import Crumb from "../components/Banner/Crumb";
import HeaderLine from "../components/Tittles/HeaderLine";
import Card from "../components/card/Card";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const WishList = () => {
  const { wishList } = useSelector((state) => state.wishList);

  return (
    <div className="wishlist p-4 relative">
      <Crumb />
      <div className="container">
        {wishList.length > 0 ? (
          <div className="products-container grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:lg:grid-cols-4 mt-28 mb-28">
            {wishList.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <HeaderLine heading={"Your WhishList is currently empty."} />
        )}
        <Link to="/shop" className="btn-red mx-auto">
          Return To Shop
        </Link>
      </div>
    </div>
  );
};

export default WishList;
