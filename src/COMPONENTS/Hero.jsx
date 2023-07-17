import React from "react";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <motion.div
      viewport={{ once: false }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ type: "linear", duration: 2.5 }}
      className=" w-full h-[60vh] sm:h-[50vh] relative top-32  text-center text-[#ffff] bg-transparent z-10 select-none"
    >
      <h1 className=" text-6xl sm:text-5xl  font-black ">
        Introducing the Luvly O
      </h1>
      <h2 className="mt-4 text-lg font-light">
        Designed in Sweden for urban life everywhere
      </h2>
    </motion.div>
  );
};
