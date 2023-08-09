import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";

const Cart = () => {
  const productData = useSelector((state) => state.bazar.productData);
  const [totalAmount, setTotalAmount] = useState(0);
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    let price = 0;
    productData.map((item) => (price += item.price * item.quantity));
    setTotalAmount(price);
    setIsEmpty(price === 0 ? true : false);
  }, [productData]);
  return (
    <div>
      <img
        src="https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Cart Image"
        className="w-full h-60 object-cover"
      />
      {isEmpty && (
        <div className="max-w-screen-xl xl:mx-auto mx-4 flex flex-col items-center gap-2 py-10">
          <h2 className="text-red-700 text-xl">
            Your Cart is Empty. Please go back to Shopping and add products to
            Cart.
          </h2>
          <Link to="/">
            <button className="flex items-center gap-1 text-gray-400 hover:text-black duration-300">
              <span>
                <HiOutlineArrowLeft />{" "}
              </span>
              Go Shopping
            </button>
          </Link>
        </div>
      )}
      {!isEmpty && (
        <div className="max-w-screen-xl xl:mx-auto mx-4 flex maxLarge:flex-row flex-col py-20">
          <CartItem />
          <div className="maxLarge:w-1/3 w-full maxLarge:mt-0 mt-10 bg-[#fafafa] py-6 px-4">
            <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
              <h2 className="text-2xl font-medium">Cart Total</h2>
              <p className="flex items-center gap-4 text-base">
                SubTotal{" "}
                <span className="font-titleFont font-bold text-lg">
                  ${totalAmount.toFixed(2)}
                </span>
              </p>
              <p className="flex items-start gap-4 text-base">
                Shipping{" "}
                <span>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quos, veritatis.
                </span>
              </p>
            </div>
            <p className="font-titleFont font-semibold flex justify-between mt-6">
              Total{" "}
              <span className="text-xl font-bold">
                ${totalAmount.toFixed(2)}
              </span>
            </p>
            <button className="text-base text-white bg-black w-full py-3 mt-6 hover:bg-gray-800 duration-300">
              Proceed To Checkout
            </button>
          </div>
        </div>
      )}
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        rtl={false}
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Cart;
