import React, { useEffect, useState } from "react";
import { FaCheck, FaHeart, FaStar } from "react-icons/fa";
import "../../styles/components/Card/Card.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart, RemoveFromCart } from "../../redux/slices/CartSlice";
import {
  addToWishList,
  removeFromWishList,
} from "../../redux/slices/wishListSlice";
import toast, { Toaster } from "react-hot-toast";

import { IoClose } from "react-icons/io5";
const Card = ({ product }) => {
  const navigate = useNavigate();
  const { wishList } = useSelector((state) => state.wishList);
  const location = useLocation();
  const pathName = location.pathname;
  const currentPageName = pathName.split("/").pop();
  const initialFav =
    wishList.find((prod) => prod.id === product.id)?.fav || false;
  const [isfav, setIsfav] = useState(initialFav);
  const dispatch = useDispatch();
  return (
    <div>
      <div
        className="card h-[585px] bg-gray rounded-lg p-3 relative cursor-pointer hover:bg-[#292929]"
        onClick={() => navigate(`/shop/${product.cat}/${product.id}`)}
      >
        {product?.isNew && <div className="new">New</div>}
        {currentPageName !== "wishlist" ? (
          !isfav ? (
            <div
              className="favorite bg-white cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setIsfav(!isfav);
                dispatch(addToWishList(product));
                dispatch(RemoveFromCart(product));
                toast.success("Item added to wishList!");
              }}
            >
              <FaHeart className="text-main text-[18px] fav_false" />
            </div>
          ) : (
            <div
              className="favorite bg-main cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setIsfav(!isfav);
                dispatch(removeFromWishList(product));
              }}
            >
              <FaHeart className="text-white text-[18px] fav_false" />
            </div>
          )
        ) : (
          <IoClose
            className="close text-[25px] hover:text-main cursor-pointer "
            onClick={(e) => {
              e.stopPropagation();
              dispatch(removeFromWishList(product));
            }}
          />
        )}

        <div className="img rounded-2xl ">
          <img src="./assets/imgs/burger.jpg" alt="" className="rounded-2xl" />
        </div>
        <div className="price-rate py-5 between-flex">
          <span className="text-main text-xl">150 EG</span>
          <span className="flex items-center gap-2 text-xl">
            <FaStar className="text-[#FFD700]" />
            4.5
          </span>
        </div>
        <div className="card-info py-5">
          <h4>Pork Chop with Apple Chutney</h4>
          <div className="flex items-center gap-3 mb-3">
            <span>
              <FaCheck />
            </span>
            4 Pieces
          </div>
          <div className="flex items-center gap-3 mb-8">
            <span>
              <FaCheck />
            </span>
            Spicy Sauce
          </div>
          <Link
            className="btn"
            onClick={(e) => {
              e.stopPropagation();
              dispatch(AddToCart(product));
              dispatch(removeFromWishList(product));
              toast.success("Item added to cart!");
            }}
          >
            Add To Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
