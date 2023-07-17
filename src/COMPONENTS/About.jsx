import rightArrow from "../assets/rightarrow.svg";
import separator from "../assets/curveNegative.svg";
import triangle from "../assets/triangle.svg";
import violetCar from "../assets/violet-car.png";
import whiteCar from "../assets/white-car.png";

export const About = () => {
  const articles = [
    {
      artTitle: `Safe`,
      artPara: ` We take safety seriously. That's why we've created a technical
            solution that's light on weight but heavy on protection. We call it
            "slow formula racing tech," and it's the key to giving our Luvly O
            best-in-class safety.`,
      id: `1`,
    },
    {
      artTitle: `Sustainable`,
      artPara: `Luvly O is a lightweight vehicle designed with sustainability at the core. It's electric and recyclable. Greener than any car. And it looks good too.`,
      id: `2`,
    },
    {
      artTitle: `Considerate`,
      artPara: `Driving a Luvly O is a civic service. Luvly O is kind to pedestrians, animals, and everyone else. Taking care of you, the urban environment and everyone in it.`,
      id: `3`,
    },
    {
      artTitle: `Simple`,
      artPara: `Luvly is all about simplicity. 
      The construction is simple. The distribution and production is simple. It's simple to buy, to drive, to charge, to park, to own.
      Simple as that.`,
      id: `4`,
    },
    {
      artTitle: `Connected`,
      artPara: `Luvly O is always connected, always updated. Luvly O and your personal device work together in harmony.`,
      id: `5`,
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center  h-full ">
        <div className="text-[#FBFEF9] relative top-[32rem] flex flex-col items-center bg-[#0E4957] text-[#ADD8E9] ">
          <img src={separator} className="w-full  -mt-1  " />
          {articles.map((article) => (
            <>
              <div
                className="flex flex-col items-center my-[3rem] sm:my-[1.5rem] md:my-[1.7rem] lg:my-[1.7rem] text-center w-[45%] sm:w-[90%] md:w-[70%] lg:w-[70%] z-20"
                key={article.id}
              >
                <h3 className=" m-2 font-semibold text-5xl sm:text-3xl md:text-4xl lg:text-4xl ">
                  {article.artTitle}
                </h3>
                <p className=" text-3xl sm:text-lg md:text-xl lg:text-xl font-extralight  ">
                  {article.artPara}
                </p>
                <button className="glass  flex flex-row items-center gap-4 mt-6 px-10 py-4 rounded-full text-[1rem] text-[#FBFEF9] tracking-wide transition-all  hover:scale-125  hover:bg-[#00ff0080] z-20 ">
                  {/* rounded-full bg-[#FE813A] p-7 block m-auto text-[#ffff] font-light  text-3xl hover:scale-110 transition-all transition-duration-300 border-4 border-[#FE813A] hover:border-4 hover:border-[#FFA26C]  */}
                  Learn more{" "}
                  <img src={rightArrow} className="filter object-contain w-4" />
                </button>
              </div>
            </>
          ))}
          <div className="absolute -right-[18%] top-[16%] ">
            <img src={violetCar} className=" w-[80%] sm:w-full " />
          </div>
          <div className="absolute right-[35%] sm:right-[10%] top-[52%] sm:top-[60%] ">
            <img src={whiteCar} className=" transf w-[60%] sm:w-full z-20 " />
          </div>
          <img
            src={triangle}
            className="w-full  relative -mb-[9rem] sm:hidden "
          />
        </div>
      </div>
    </>
  );
};
