import { InfiniteSlider } from "./InfiniteSlider";

export const Slider = () => {
  return (
    <>
      <div className=" h-[50vh] sm:h-[45vh] relative top-[33em] w-full text-center text-[#ffff] font-light text-3xl flex flex-col gap-10 ">
        <p className="mb-8 ">Featured in</p>
        <InfiniteSlider />
      </div>
    </>
  );
};
