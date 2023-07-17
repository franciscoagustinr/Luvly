import React from "react";

export const FAQ = () => {
  const questions = [
    {
      qst: `How affordable are Luvly vehicles?
            `,
      res: `The Luvly O is significantly cheaper than traditional car options. Luvly wants to make ethical and sustainable personal transport possible for everyone.
            `,
    },
    {
      qst: `How are Luvly vehicles manufactured?
            `,
      res: `Luvly’s patented flatpack innovations greatly reduce the ecological impact of manufacture, transport, and assembly. Virtually all Luvly vehicle parts are recyclable and most can be made from renewable materials.
            `,
    },
    {
      qst: `What makes Luvly vehicles safe?
            `,
      res: `Luvly vehicles are built like formula racing cars, with energy absorbers and a sandwich composite safety shell protecting the passengers. This technology offers by far the best passive safety compared with any comparable vehicle. Luvly vehicles contribute to safer urban traffic, as alternatives to multi-tonne cars.
            `,
    },
    {
      qst: `Is a Luvly vehicle more environmentally friendly than a conventional electric car?
            `,
      res: `Compared to conventional electric cars, a Luvly vehicle saves up to 80% energy during production as well as in operation of the vehicle.
            `,
    },
    {
      qst: `How can I see Luvly vehicles first-hand?
            `,
      res: `Sign up to the Luvly newsletter to follow the journey and receive notifications about when and where you can experience an LUV first-hand.
            `,
    },
    {
      qst: `Will you be launching more LUV models?
            `,
      res: `You bet. Subscribe to Luvly updates, including product launches, updates and events.
            `,
    },
    {
      qst: `Where are you based?
            `,
      res: `Luvly is headquartered in Stockholm, Sweden.
            `,
    },
    // {
    //   qst: `I have another question!
    //         `,
    //   res: `Can't find an answer here? Please, contact us.`,
    // },
  ];

  return (
    <section className="relative top-[45rem] sm:top-[33rem] text-[#ffff] w-[100%] h-[55vh] z-30 ">
      <h3 className="font-bold tracking-widest text-4xl  text-center my-8 ">
        FAQ
      </h3>

      <div className=" w-[60%] sm:w-[80%] m-auto    ">
        {questions.map((question, index) => (
          <>
            <details
              className=" my-4 text-white  font-bold text-left  "
              key={index}
            >
              <summary
                key={question.qst}
                className="flex justify-between px-[1.3rem] py-[0.5em] cursor-pointer text-3xl sm:text-lg md:text-xl lg:text-xl font-bold border-b-2 "
              >
                {question.qst}
              </summary>
              <div className="text-xl sm:text-lg font-light mt-4 ">
                {question.res}
              </div>
            </details>
          </>
        ))}
        <p className="text-xl text-center mt-16 sm:mt-14 ">
          Can't find an answer here? Please,{" "}
          <span className="font-black cursor-pointer  "> contact us. </span>
        </p>
      </div>
    </section>
  );
};
