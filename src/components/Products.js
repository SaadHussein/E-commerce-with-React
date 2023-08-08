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
      <div className="xl:mx-auto mx-5 max-w-screen-xl py-10 grid xl:grid-cols-4 midLarge:grid-cols-3 smallTab:grid-cols-2 grid-cols-1 gap-8 items-start justify-between">
        {products.map((item) => (
          <ProductsCard key={item._id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
