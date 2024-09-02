import React from "react";
import "../../styles/Cart/CartItem.css";
import { useDispatch } from "react-redux";
import {
  decrementsQuantity,
  incrementsQuantity,
  RemoveFromCart,
} from "../../redux/slices/CartSlice";
import { IoIosClose } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-item btn-item mb-4">
      <div className="item-img h-[109px] w-[157px] rounded-lg">
        <img
          src="./assets/imgs/crumb.jpg"
          alt=""
          className="w-full h-full rounded-lg"
        />
      </div>
      <div className="item-info flex-col text-left flex-1 pr-4">
        <div className=" between-flex ">
          <h4>Pork Chop with Apple Chutney</h4>
          <IoClose
            className="text-[30px] hover:text-main cursor-pointer "
            onClick={() => dispatch(RemoveFromCart(product))}
          />
        </div>
        <span className="block text-xl text-main mt-2 mb-3">150 EG</span>
        <div className="flex items-center gap-4">
          <span>4 Pieces</span>
          <span>Spicy Sauce</span>
          <div className="btn-control flex flex-1 items-center justify-end gap-3">
            <span
              className="btn center-flex w-[30px] h-[30px] select-none cursor-pointer "
              onClick={() => {
                if (product.quantity > 1) dispatch(decrementsQuantity(product));
                else {
                  dispatch(RemoveFromCart(product));
                }
              }}
            >
              -
            </span>
            <span className="text-xl font-semibold select-none">
              {product.quantity}
            </span>
            <span
              className="btn center-flex w-[30px] h-[30px] select-none cursor-pointer "
              onClick={() => dispatch(incrementsQuantity(product))}
            >
              +
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
