import React from "react";
import ProductsCard from "./ProductsCard";

const Products = ({ products }) => {
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="bigPhone:text-2xl text-xl bg-black text-white py-2 text-center bigPhone:w-80 w-60">
          Shopping Everyday
        </h1>
        <span className="w-20 h-[3px] bg-black" />
        <p className="max-w-[700px] text-center text-gray-600 bigPhone:text-base text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo,
          quos fugit inventore, cumque quae corporis ratione tenetur eos
          voluptates neque magnam soluta aperiam omnis perspiciatis reiciendis
          asperiores repudiandae assumenda quidem.
        </p>
      </div>
      <div className="mx-auto max-w-screen-xl py-10">
        <ProductsCard />
      </div>
    </div>
  );
};

export default Products;
