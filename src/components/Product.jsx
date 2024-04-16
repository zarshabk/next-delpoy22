import React from "react";

const Product = ({ item }) => {
  return (
    <div className="shadow bg-slate-800 h-[340px]">
      <div className="w-full">
        <img
          src={item?.thumbnail}
          className="h-[250px] w-full object-cover"
          alt=""
        />
      </div>
      <div className="py-3 px-2 flex justify-between gap-[8px]">
        <h2 className="text-md text-gray-500 tracking-tighter">
          {item?.title}
        </h2>
        <h2 className="text-md text-gray-500">
          $ <sup className="text-lg font-bold text-white">{item?.price}</sup>
        </h2>
      </div>
      <div className="px-2 mb-1">
        <button className="bg-white text-sm text-black py-[8px] px-3 rounded-lg hover:bg-green-500 hover:text-white">
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default Product;
