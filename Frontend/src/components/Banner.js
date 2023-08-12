import React, { useState } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

const data = [
  "https://amazonproone.vercel.app/static/media/img2.bc1bdb910ead16c65197.jpg",
  "https://amazonproone.vercel.app/static/media/img5.aa945e25375bfdee385f.jpg",
  "https://amazonproone.vercel.app/static/media/img3.c80809bb40bee5c34372.jpg",
  "https://amazonproone.vercel.app/static/media/img1.efb3d39101f7ef77d616.jpg",
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div className="w-screen large:h-[650px] tablet:h-[500px] smallTab:h-[400px] bigPhone:h-[300px] h-[200px] relative">
        <div
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          className="w-[400vw] flex h-full transition-transform duration-700"
        >
          <img
            src={data[0]}
            alt="ImageinHero"
            className="w-screen h-full object-cover"
            loading="priority"
          />
          <img
            src={data[1]}
            alt="ImageinHero"
            className="w-screen h-full object-cover"
            loading="priority"
          />
          <img
            src={data[2]}
            alt="ImageinHero"
            className="w-screen h-full object-cover"
            loading="priority"
          />
          <img
            src={data[3]}
            alt="ImageinHero"
            className="w-screen h-full object-cover"
            loading="priority"
          />
        </div>
        <div className="absolute flex gap-8 left-0 right-0 large:bottom-44 tablet:bottom-24 smallTab:bottom-16 bigPhone:bottom-12 bottom-6 mx-auto w-fit">
          <div
            onClick={prevSlide}
            className="tablet:w-14 tablet:h-12 bigPhone:w-10 bigPhone:h-10 w-7 h-7 border-[1px] border-gray-700 flex items-center justify-center cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <HiArrowLeft />
          </div>
          <div
            onClick={nextSlide}
            className="tablet:w-14 tablet:h-12 bigPhone:w-10 bigPhone:h-10 w-7 h-7 border-[1px] border-gray-700 flex items-center justify-center cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <HiArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
