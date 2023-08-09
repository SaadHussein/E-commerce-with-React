import React, { useEffect, useState } from "react";
import { MdOutlineStar } from "react-icons/md";
import { useLocation } from "react-router-dom";

const Product = () => {
  const location = useLocation();
  const [details, setDetails] = useState({});

  useEffect(() => {
    setDetails(location.state.item);
  }, [location]);

  return (
    <div>
      <div className="max-w-screen-xl xl:mx-auto mx-4 my-10 flex tablet:flex-row flex-col gap-10">
        <div className="tablet:w-2/5 w-full relative">
          <img
            src={details.image}
            className="w-full h-[550px] object-cover"
            alt="Product Image"
          />
          <div className="absolute top-4 right-0">
            {details.isNew && (
              <p className="bg-black text-white font-titleFont font-semibold px-8 py-1">
                Sale
              </p>
            )}
          </div>
        </div>
        <div className="tablet:w-3/5 w-full flex flex-col justify-center gap-12">
          <div>
            <h2 className="bigPhone:text-4xl text-3xl font-semibold">
              {details.title}
            </h2>
            <div className="flex items-center gap-4 mt-3">
              <p className="line-through text-base text-gray-500">
                ${details.oldPrice}
              </p>
              <p className="text-2xl font-medium text-gray-900">
                ${details.price}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-base">
            <div className="flex">
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
            </div>
            <p className="text-xs text-gray-500">(1 Customer Review)</p>
          </div>
          <p className="text-base text-gray-500 -mt-3">{details.description}</p>
          <div className="flex bigPhone:flex-row flex-col gap-4">
            <div className="w-52 flex items-center justify-between text-gray-500 gap-4 border p-3">
              <p className="text-sm">Quantity</p>
              <div className="flex items-center gap-4 text-sm font-semibold">
                <button className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black">
                  +
                </button>
                <span>{1}</span>
                <button className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black">
                  -
                </button>
              </div>
            </div>
            <button className="bg-black text-white py-3 px-6 active:bg-gray-800">
              Add To Cart
            </button>
          </div>
          <p className="text-base text-gray-500">
            <span className="font-medium capitalize">
              Category: {details.category}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
