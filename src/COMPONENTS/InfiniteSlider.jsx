import React from "react";
import dagens from "../assets/logo-dagens-industri.svg";
import fast from "../assets/logo-fast-company.svg";
import ny from "../assets/logo-ny-teknik.svg";

export const InfiniteSlider = () => {
  const widthScreen = window.innerWidth;
  return (
    <>
      <div className="flex items-center justify-center">
        {widthScreen > 1020 ? (
          <>
            {" "}
            <div className="w-[200%]  h-20  overflow-hidden relative">
              <div className="w-[200%] flex items-center h-20 justify-around absolute  animate gap-20 animate">
                <div className="flex justify-center items-start  w-[20rem] gap-64  ">
                  <img src={dagens} className="w-[34vmax] " />
                  <img src={fast} className="w-[34vmax] " />
                  <img src={ny} className="w-[34vmax] " />
                </div>
                <div className="flex justify-center items-start w-[20rem] gap-64 sm:hidden ">
                  <img src={dagens} className="w-[34vmax]" />
                  <img src={fast} className="w-[34vmax]" />
                  <img src={ny} className="w-[34vmax]" />
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-center items-center flex-wrap ">
              <img src={dagens} className="w-[34vmax]  sm:my-4" />
              <img src={fast} className="w-[34vmax] sm:my-4" />
              <img src={ny} className="w-[34vmax] sm:my-4" />
            </div>
          </>
        )}
      </div>
    </>
  );
};
