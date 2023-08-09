import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  deleteItem,
  incrementQuantity,
  resetCart,
} from "../redux/bazarSlice";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

const CartItem = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.bazar.productData);

  return (
    <div className="maxLarge:w-2/3 w-full maxLarge:pr-10 pr-0">
      <div className="w-full">
        <h2 className="font-titleFont text-2xl">Shopping Cart</h2>
      </div>
      <div>
        {productData.map((item) => (
          <div
            key={item._id}
            className="relative flex tablet:flex-row flex-col border items-center justify-between py-2 gap-6 mt-6"
          >
            <div className="flex items-center gap-2">
              <MdOutlineClose
                onClick={() =>
                  dispatch(deleteItem(item._id)) &
                  toast.error(`${item.title} is Removed`)
                }
                className="text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300 tablet:block hidden"
              />
              <img
                src={item.image}
                alt="Product Image"
                className="tablet:w-32 tablet:h-32 w-44 h-44 object-cover"
              />
            </div>
            <h2 className="w-52 text-center">{item.title}</h2>
            <h2 className="w-52 text-center">One Item Price: ${item.price}</h2>
            <div className="w-52 flex items-center justify-between text-gray-500 gap-4 border p-3">
              <p className="text-sm">Quantity</p>
              <div className="flex items-center gap-4 text-sm font-semibold">
                <button
                  onClick={() =>
                    dispatch(
                      decrementQuantity({
                        _id: item._id,
                        title: item.title,
                        image: item.image,
                        price: item.price,
                        quantity: 1,
                        description: item.description,
                      })
                    )
                  }
                  className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() =>
                    dispatch(
                      incrementQuantity({
                        _id: item._id,
                        title: item.title,
                        image: item.image,
                        price: item.price,
                        quantity: 1,
                        description: item.description,
                      })
                    )
                  }
                  className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  +
                </button>
              </div>
            </div>
            <p className="w-52 text-center">
              Total Item Price: ${item.quantity * item.price}
            </p>

            <MdOutlineClose
              onClick={() =>
                dispatch(deleteItem(item._id)) &
                toast.error(`${item.title} is Removed`)
              }
              className="text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300 tablet:hidden block absolute top-2 left-2"
            />
          </div>
        ))}
      </div>
      <button
        onClick={() =>
          dispatch(resetCart()) & toast.error("Your Cart is Empty..!")
        }
        className="text-white bg-red-500 mt-8 ml-7 py-1 px-6 hover:bg-red-800 duration-300"
      >
        Reset Cart
      </button>
      <Link to="/">
        <button className="mt-8 ml-7 flex items-center gap-1 text-gray-400 hover:text-black duration-300">
          <span>
            <HiOutlineArrowLeft />{" "}
          </span>
          Go Shopping
        </button>
      </Link>
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

export default CartItem;
