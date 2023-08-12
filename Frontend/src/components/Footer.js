import React from "react";
import { logoWhite, paymentLogo } from "../assets";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaHome,
  FaYoutube,
} from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { MdLocationOn } from "react-icons/md";
import { BsPaypal, BsPersonFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-black py-20 font-titleFont text-[#949494]">
      <div className="max-w-screen-xl xl:mx-auto mx-5 flex items-start justify-between flex-wrap">
        <div className="flex flex-col gap-7 m-5">
          <img src={logoWhite} alt="logoWhite" className="w-32" />
          <p className="text-white text-sm tracking-wide">© ReactBD.com</p>
          <img src={paymentLogo} alt="paymentLogo" className="w-56" />
          <div className="flex gap-5 text-lg text-gray-400">
            <ImGithub className="hover:text-white duration-200 cursor-pointer" />
            <FaFacebook className="hover:text-white duration-200 cursor-pointer" />
            <FaYoutube className="hover:text-white duration-200 cursor-pointer" />
            <FaTwitter className="hover:text-white duration-200 cursor-pointer" />
            <FaInstagram className="hover:text-white duration-200 cursor-pointer" />
          </div>
        </div>
        <div className="m-5">
          <h2 className="text-2xl font-semibold text-white mb-4">Locate Us</h2>
          <div className="text-base flex flex-col gap-2">
            <p>MBD,Ruwi, Muscat-Oman</p>
            <p>Mobile: 00968 97859628</p>
            <p>Phone: 00968 24769821</p>
            <p>e-mail: bazar@gmail.com</p>
          </div>
        </div>
        <div className="m-5">
          <h2 className="text-2xl font-semibold text-white mb-4">Profile</h2>
          <div className="flex flex-col gap-2 text-base">
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsPersonFill />
              </span>
              My Person
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsPaypal />
              </span>
              CheckOut
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <FaHome />
              </span>
              Order Tracking
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <MdLocationOn />
              </span>
              Help & Support
            </p>
          </div>
        </div>
        <div
          className="flex flex-col justify-center
        my-auto mx-5"
        >
          <input
            className="bg-transparent border px-4 py-2 text-sm"
            type="email"
            placeholder="Your E-mail"
          />
          <button className="text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
