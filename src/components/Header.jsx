"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [scroll, setScroll] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.pageYOffset > 150) {
  //       setScroll(true);
  //     } else {
  //       setScroll(false);
  //     }
  //   });
  // }, []);
  return (
    <div
      className={`h-[80px] w-full flex items-center justify-between z-50 ${
        scroll ? "fixed duration-100 top-0 w-full bg-slate-900" : ""
      }`}
    >
      <div className="container lg:w-[80%] w-[98%] m-auto flex justify-between items-center">
        <h1 className="font-medium text-xl text-green-400">APP DEVELOPMENT</h1>
        <div className="flex gap-5 text-gray-400">
          <Link href={"#"}>Home</Link>
          <Link href={"#"}>Products</Link>
          <Link href={"#"}>Services</Link>
          <Link href={"#"}>Design & Development</Link>
          <Link href={"#"}>Faqs</Link>
        </div>
        <div>
          <Link
            href={"/register"}
            className="p-2 px-5 text-green-500 hover:bg-green-500 hover:text-white rounded-[30px] border-green-500 border-[1px]"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
