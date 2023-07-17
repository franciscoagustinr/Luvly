import React from "react";

export const Loader = () => {
  return (
    <div className="bg-[#70ac92] w-full h-[100vh] flex flex-row  justify-center items-center transition-all ">
      {/* <span class="loader"></span> */}

      <div className="three-body">
        <div className="three-body__dot"></div>
        <div className="three-body__dot"></div>
        <div className="three-body__dot"></div>
      </div>
    </div>
  );
};
