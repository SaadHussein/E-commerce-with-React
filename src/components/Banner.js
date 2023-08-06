import React from "react";

const data = [
  "https://amazonproone.vercel.app/static/media/img2.bc1bdb910ead16c65197.jpg",
  "https://amazonproone.vercel.app/static/media/img5.aa945e25375bfdee385f.jpg",
  "https://amazonproone.vercel.app/static/media/img3.c80809bb40bee5c34372.jpg",
  "https://amazonproone.vercel.app/static/media/img1.efb3d39101f7ef77d616.jpg",
];

const Banner = () => {
  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div>
        <div className="w-[400vw] flex h-full">
          <img
            src={data[0]}
            alt="ImageinHero"
            className="w-screen h-full object-contain"
            loading="priority"
          />
          <img
            src={data[1]}
            alt="ImageinHero"
            className="w-screen h-full object-contain"
            loading="priority"
          />
          <img
            src={data[2]}
            alt="ImageinHero"
            className="w-screen h-full object-contain"
            loading="priority"
          />
          <img
            src={data[3]}
            alt="ImageinHero"
            className="w-screen h-full object-contain"
            loading="priority"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
