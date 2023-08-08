import React, { useState } from "react";
import { cartImg, logoDark } from "../assets";
import { GrMenu, GrClose } from "react-icons/gr";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const menuHandler = () => {
    setToggleMenu((prevState) => !prevState);
  };

  return (
    <div className="w-full h-20 border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50 bg-white">
      <div className="flex items-center justify-between max-w-screen-xl h-full mx-4 xl:mx-auto">
        <div>
          <img
            src={logoDark}
            alt="Logo Image"
            className="object-contain w-28"
          />
        </div>
        <div className="flex items-center mobile:gap-8 gap-4 relative">
          <ul className="list-none tablet:flex hidden items-center gap-8">
            <li className="text-base font-bold text-black hover:text-orange-900 hover:underline underline-offset-2 cursor-pointer duration-300">
              Home
            </li>
            <li className="text-base font-bold text-black hover:text-orange-900 hover:underline underline-offset-2 cursor-pointer duration-300">
              Pages
            </li>
            <li className="text-base font-bold text-black hover:text-orange-900 hover:underline underline-offset-2 cursor-pointer duration-300">
              Shop
            </li>
            <li className="text-base font-bold text-black hover:text-orange-900 hover:underline underline-offset-2 cursor-pointer duration-300">
              Element
            </li>
            <li className="text-base font-bold text-black hover:text-orange-900 hover:underline underline-offset-2 cursor-pointer duration-300">
              Blog
            </li>
          </ul>
          {!toggleMenu && (
            <GrMenu
              fontSize={28}
              onClick={menuHandler}
              className="cursor-pointer tablet:hidden block"
            />
          )}
          {toggleMenu && (
            <GrClose
              fontSize={28}
              onClick={menuHandler}
              className="cursor-pointer tablet:hidden block"
            />
          )}
          <div className="relative">
            <img
              src={cartImg}
              alt="Cart Image"
              className="w-6 cursor-pointer"
            />
            <span className="absolute w-6 top-2 left-0 flex items-center justify-center font-semibold text-sm">
              0
            </span>
          </div>
          <img
            src="https://images.unsplash.com/photo-1690934872924-4deafe751039?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
            alt="Logo Image"
            className="w-8 h-8 rounded-full cursor-pointer"
          />

          {toggleMenu && (
            <div className="absolute z-10 tablet:hidden flex top-10 bg-white p-3 shadow-md">
              <ul className="list-none items-center justify-center flex-col gap-4">
                <li className="text-base font-bold text-black hover:text-orange-900 hover:underline underline-offset-2 cursor-pointer duration-300">
                  Home
                </li>
                <li className="text-base font-bold text-black hover:text-orange-900 hover:underline underline-offset-2 cursor-pointer duration-300">
                  Pages
                </li>
                <li className="text-base font-bold text-black hover:text-orange-900 hover:underline underline-offset-2 cursor-pointer duration-300">
                  Shop
                </li>
                <li className="text-base font-bold text-black hover:text-orange-900 hover:underline underline-offset-2 cursor-pointer duration-300">
                  Element
                </li>
                <li className="text-base font-bold text-black hover:text-orange-900 hover:underline underline-offset-2 cursor-pointer duration-300">
                  Blog
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
