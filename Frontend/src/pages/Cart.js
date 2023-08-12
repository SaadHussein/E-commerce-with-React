import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";

const Cart = () => {
  const productData = useSelector((state) => state.bazar.productData);
  const userInfo = useSelector((state) => state.bazar.userInfo);
  const [totalAmount, setTotalAmount] = useState(0);
  const [isEmpty, setIsEmpty] = useState(true);
  const [payNow, setPayNow] = useState(false);

  useEffect(() => {
    let price = 0;
    productData.map((item) => (price += item.price * item.quantity));
    setTotalAmount(price);
    setIsEmpty(price === 0 ? true : false);
  }, [productData]);

  const handleCheckout = () => {
    if (userInfo) {
      setPayNow(true);
    } else {
      setPayNow(false);
      toast.error("Please Sign in to Checkout");
    }
  };

  const payment = async (token) => {
    await axios.post("http://localhost:8000/pay", {
      amount: totalAmount * 100,
      token: token,
    });
  };
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
            <button
              onClick={handleCheckout}
              className="text-base text-white bg-black w-full py-3 mt-6 hover:bg-gray-800 duration-300"
            >
              Proceed To Checkout
            </button>
            {payNow && (
              <div className="flex items-center justify-center mt-10 w-full">
                <StripeCheckout
                  email={userInfo.email}
                  stripeKey="pk_test_51NeKLDGtpBKc1fq11htR78CBqhduK9iVZ8zP2dQDoUW5lxacspAU0u5qi3GSAzF5yuxdGH6TYx66mTFMMnbXcept00VxiPUqUO"
                  name="E-commerce"
                  label="Pay to E-commerce"
                  amount={totalAmount * 100}
                  description={`Your Payment Amount is ${totalAmount}`}
                  token={payment}
                />
              </div>
            )}
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
