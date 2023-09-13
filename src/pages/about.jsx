import React from "react";
import img1 from "../assets/team.webp";
const About = () => {
  return (
    <div>
      <div id="top" className="flex flex-col gap-12 items-center">
        <div className="flex flex-col items-center gap-4">
          <p className="bg-gradient-to-r from-[#333139] to-[#27232C] w-fit px-6 py-2 rounded-tl-full  rounded-r-full ">
            About us
          </p>
          <p className="md:text-6xl text-4xl font-bold md:px-80 text-center">
            A small creative team excited to create beautiful things
          </p>
          <p className="text-xl text-[#C2C7DC]">
            Born out of a shared passion for design and innovation, we're a
            dedicated team committed to turning visions into impactful digital
            realities.
          </p>
        </div>
        <img src={img1} alt="" className="rounded-3xl" />
      </div>
    </div>
  );
};

export default About;
