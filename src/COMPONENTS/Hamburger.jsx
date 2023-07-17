import React from "react";

export const Hamburger = () => {
  return (
    <>
      <input id="toggle" type="checkbox" />
      <label
        htmlFor="toggle"
        className="hamburger relative top-0 w-[2em] h-[45px] z-50 cursor-pointer "
      >
        <div className="top-bun "></div>
        <div className="meat "></div>
        <div className="bottom-bun "></div>
      </label>

      <div className="nav fixed w-full h-full bg-[#454e9e] overflow-hidden transition-all duration-[0.7s] ease-[ease] scale-100 left-0 right-0 -top-full bottom-0 z-40">
        <div className="nav-wrapper relative overflow-hidden overflow-y-auto h-full">
          <nav className="h-[100vh] flex flex-col content-start justify-evenly items-start text-left ml-[20%] z-40 ">
            <a href="#" className=" ">
              HOME
            </a>
            <a href="#" className=" ">
              ABOUT
            </a>
            <a href="#" className=" ">
              WORK
            </a>
            <a href="#" className=" ">
              SERVICES
            </a>
          </nav>
        </div>
      </div>
    </>
  );
};
