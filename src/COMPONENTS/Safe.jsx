import rightArrow from "../assets/rightarrow.svg";

export const Safe = () => {
  return (
    <>
      {" "}
      <div className="relative top-[45rem] w-full  bg-[#FE813A]  p-10  ">
        <h3 className="text-center m-2 ">Safe</h3>
        <p>
          We take safety seriously. That's why we've created a technical
          solution that's light on weight but heavy on protection. We call it
          "slow formula racing tech," and it's the key to giving our Luvly O
          best-in-class safety.
        </p>
        <button className="relative flex flex-row items-center gap-4  p-4 ">
          Learn more <img src={rightArrow} className="object-contain w-4" />{" "}
        </button>
      </div>
    </>
  );
};
