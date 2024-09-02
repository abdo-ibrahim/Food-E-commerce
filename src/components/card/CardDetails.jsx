import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart, RemoveFromCart } from "../../redux/slices/CartSlice";
import {
  addToWishList,
  removeFromWishList,
} from "../../redux/slices/wishListSlice";
import { Link } from "react-router-dom";
import crumb from "../../assets/imgs/crumb.jpg";
import { FaHeart } from "react-icons/fa";
import "../../styles/components/Card/CardDetails.css";
import toast, { Toaster } from "react-hot-toast";
const CardDetails = ({ product }) => {
  const dispatch = useDispatch();
  const { wishList } = useSelector((state) => state.wishList);

  const initialFav =
    wishList.find((prod) => prod.id === product.id)?.fav || false;
  const [isfav, setIsfav] = useState(initialFav);
  return (
    <div>
      <div>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
      <div className="card-details mb-4 flex items-start gap-8 p-4 bg-gray">
        {product?.isNew && <div className="new">New</div>}
        {!isfav ? (
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
        )}
        <div className="item-img w-[40%] rounded-lg">
          <img src={crumb} alt="" className="w-full h-full rounded-lg" />
        </div>
        <div className="item-info relative flex-col text-left flex-1 pr-4">
          <h4 className="text-3xl">Pork Chop with Apple Chutney</h4>
          <p className="my-4 leading-7">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic aut
            dolor impedit dolorem, at autem quia temporibus eligendi tempore
            commodi Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Hic aut dolor impedit dolorem, at autem quia temporibus eligendi
            tempore commodi!
          </p>
          <span className="block text-xl text-main my-6">150 EG</span>
          <Link
            className="btn w-[250px]"
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

export default CardDetails;
