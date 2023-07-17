import React from "react";
import luvly from "../assets/luvly.svg";
import { CTA } from "./CTA";
import rightArrow from "../assets/rightarrow.svg";
export const Footer = () => {
  return (
    <>
      <footer className="relative top-[66rem] sm:top-[65rem] h-[18.5rem] w-full flex flex-col items-center justify-around bg-[#ffff] p-20 sm:p-6 sm:mt-8 ">
        <div className="w-full flex flex-row sm:flex-col  items-center justify-around sm:text-sm ">
          <img src={luvly} className="filterO w-32 cursor-pointer  " />
          <ul className="flex flex-col sm:my-6 gap-2 sm:text-center ">
            <li className="hover:underline">
              <a href="" className="">
                Follow on LinkedIn
              </a>
            </li>
            <li className="hover:underline">
              <a href="" className="">
                Follow on Facebook
              </a>
            </li>
            <li className="hover:underline">
              <a href="" className="">
                Terms & Conditions
              </a>
            </li>
            <li className="hover:underline">
              <a href="" className="">
                Corporate
              </a>
            </li>
            <li className="hover:underline">
              <a href="" className="">
                Follow on Instagram
              </a>
            </li>
          </ul>
        </div>
        <p className="text-center sm:text-sm md:mt-4 lg:mt-4">
          Copyright Luvly 2023. All rights reserved. Terms & conditions apply.
        </p>
      </footer>
    </>
  );
};
