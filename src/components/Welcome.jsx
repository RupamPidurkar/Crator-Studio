import React from "react";
import Hero from "../assets/hero-home.webp";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div
      id="main"
      style={{
        background: "linear-gradient(110deg, #22202B 60%, #1F1B25 60%)",
      }}
      className="grid  md:grid-cols-2 gap-8  justify-items-center items-center bg-gray-800 mx-4 lg:px-32 py-16 md:py-28 lg:mx-24 rounded-3xl"
    >
      <div
        id="left"
        className="flex flex-col md:justify-between gap-5 px-4 items-center md:items-start "
      >
        <p className="bg-[#1B1820] w-fit px-6 py-2 rounded-tl-full  rounded-r-full ">
          Welcome
        </p>
        <h1 className="text-4xl text-center md:text-left lg:text-5xl font-extrabold">
          {`Let's`} make your product a success
        </h1>
        <p
          className="text-lg text-center md:text-left  text-[#ADC6DD]"
          id="main-p"
        >
          Crator is your partner in digital innovation. We fuse strategic
          thinking with standout design and development to deliver uniquely
          tailored solutions.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <Link
            to="/connect"
            className="text-[#22202B] bg-white hover:bg-[#1F1B25] hover:text-white font-medium px-7 py-4 rounded-full"
          >{`Let's get started`}</Link>

          <Link
            to="/services"
            className="relative  group lg:px-14 px-10  py-4 bg-[#1C1B23] rounded-full "
          >
            <span
              className="md:absolute hidden md:left-2 lg:left-0 top-0 h-full w-14 z-0 bg-[#1C1B23] 
            rounded-full group-hover:w-36 transition-all ease-in-out"
            ></span>
            <span className="z-11 relative">Learn more</span>
          </Link>
        </div>
      </div>
      <div id="right" className="  ">
        <img src={Hero} className="rounded-3xl p-4" alt="" />
      </div>
    </div>
  );
};

export default Welcome;
