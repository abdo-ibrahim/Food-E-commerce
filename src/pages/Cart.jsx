import React from "react";
import Crumb from "../components/Banner/Crumb";
import HeaderLine from "../components/Tittles/HeaderLine";
import { Link } from "react-router-dom";
import CartItem from "../components/Cart/CartItem";
import { useSelector } from "react-redux";

const Cart = () => {
  const { carts } = useSelector((state) => state.carts);
  const total = carts.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);

  return (
    <div className="cart p-4 relative">
      <Crumb />
      <div className="container">
        {carts.length > 0 ? (
          <>
            <HeaderLine
              heading={"Your Cart Summary"}
              desc={"Your Cart Summary"}
            />
            <h4 className="text-2xl">{carts.length} Items In Cart</h4>
            <div className="cart-container my-8 flex flex-1 gap-8 justify-center lg:justify-between items-center lg:items-start flex-col lg:flex-row ">
              <div className="items">
                {/* map here */}
                {carts.map((product) => (
                  <CartItem key={product.id} product={product} />
                ))}
              </div>
              {/* make checkout as a comp */}
              <div className="checkout btn-item w-[350px] h-[220px]">
                <div className="total between-flex uppercase mb-10 p-4">
                  <h4 className="text-[22px]">Total: </h4>
                  <p className="text-[22px] text-main">{total} EG</p>
                </div>

                <Link to="/shop" className="btn-red mx-auto">
                  Checkout
                </Link>
              </div>
            </div>
          </>
        ) : (
          <HeaderLine heading={"Your cart is currently empty."} />
        )}
        <Link to="/shop" className="btn-red mx-auto">
          Return To Shop
        </Link>
      </div>
    </div>
  );
};

export default Cart;
