import React from "react";
import rightArrow from "../assets/rightarrow.svg";

export const ScrollToTop = ({ heroRef }) => {
  return (
    <>
      <div
        className="absolute right-52 bottom-[-65rem] bg-[#FE813A] p-4 rounded-full hover:scale-125 transition-all cursor-pointer "
        onClick={() => {
          // heroRef.scrollIntoView();
          console.log(hola);
        }}
      >
        <img
          src={rightArrow}
          className="filter object-contain w-6 -rotate-90 "
        />
      </div>
    </>
  );
};
