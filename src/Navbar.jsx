import React from "react";
import luvly from "../assets/luvly.svg";
import { Hamburger } from "./COMPONENTS/Hamburger";

export const Navbar = () => {
  return (
    <>
      <div className="fromTop fixed top-0 w-[100%] py-4 flex flex-row items-center justify-around bg-transparent z-20 ">
        <section>
          <img src={luvly} className="filter w-[167px] h-[73px]" />
        </section>
        <section>
          <Hamburger />
        </section>
      </div>
    </>
  );
};
