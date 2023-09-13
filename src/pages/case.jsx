import React from "react";
import Challenge from "../assets/Puzzle.png";
import Results from "../assets/idea.png";
import Service from "../assets/Services.png";
import Nedia from "../assets/Nedia.webp";
import Something from "../components/Something";

const Case = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-12 h-full w-screen px-4">
        <div className="flex flex-col items-center gap-4">
          <p className="bg-gradient-to-r from-[#333139] to-[#27232C] w-fit px-6 py-2 rounded-tl-full  rounded-r-full ">
            Case study
          </p>
          <p className="text-4xl md:text-6xl font-bold md:px-80 text-center">
            From idea to a thriving social platform
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-16 px-24">
          <div className="flex flex-col items-center text-center gap-4">
            <div className="bg-gradient-to-r from-[#333139] to-[#24202A] w-fit rounded-2xl">
              <img src={Challenge} alt="" className="h-16  p-4  " />
            </div>
            <p className="text-2xl font-semibold">Challenge</p>
            <p className="text-xl text-[#C2C7DC]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elitdo eius
              mod tempor.
            </p>
          </div>
          <div className="flex flex-col items-center text-center gap-4">
            <div className="bg-gradient-to-r from-[#333139] to-[#24202A] w-fit rounded-2xl">
              <img src={Service} alt="" className="h-16  p-4  " />
            </div>
            <p className="text-2xl font-semibold">Services</p>
            <p className="text-xl text-[#C2C7DC]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elitdo eius
              mod tempor.
            </p>
          </div>
          <div className="flex flex-col items-center text-center gap-4">
            <div className="bg-gradient-to-r from-[#333139] to-[#24202A] w-fit rounded-2xl">
              <img src={Results} alt="" className="h-16  p-4  " />
            </div>
            <p className="text-2xl font-semibold">Results</p>
            <p className="text-xl text-[#C2C7DC]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elitdo eius
              mod tempor.
            </p>
          </div>
        </div>
        <div className="rounded-2xl w-80%  flex items-center px-24 py-24">
          <img
            src={Nedia}
            alt=""
            className="w-full  object-cover rounded-3xl "
          />
        </div>

        {/********************** */}

        <div className="flex flex-col gap-4 items-center text-center md:px-64 font-medium">
          <p className="bg-gradient-to-r from-[#333139] to-[#27232C] w-fit px-6 py-2 rounded-tl-full  rounded-r-full ">
            About the project
          </p>
          <p className="text-4xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eius
            mod tempor incididunt ut labore et. Ad cum decore expetenda
            dissentiet, civibus patrioque referrentur id nec, ei eam simul
            diceret.
          </p>
        </div>

        {/********************************************* */}

        <div
          className="flex flex-col gap-16 items-center py-24 rounded-3xl"
          style={{
            background: "linear-gradient(110deg, #22202B 60%, #1F1B25 60%)",
          }}
        >
          <div className="flex flex-col gap-8 items-center text-center  ">
            <p
              className="bg-gradient-to-r bg-[#18191F] w-fit px-6 py-2 
            rounded-tl-full  rounded-r-full "
            >
              Key status
            </p>
            <p className="text-5xl font-bold">
              Going above and beyond our clients <br />
              expectations.
            </p>
            <p className="text-2xl text-[#C2C7DC] px-24">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repellendus repellat <br />
              laudantium.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-24 md:gap-64 md:px-24">
            <div className="flex gap-4 flex-col items-center">
              <p className="text-6xl font-extrabold">$2.1m</p>
              <p className="text-2xl text-[#C2C7DC]">
                Additional revenue (2021)
              </p>
            </div>
            <div className="flex gap-4 flex-col items-center">
              <p className="text-6xl font-extrabold">12m</p>
              <p className="text-2xl text-[#C2C7DC]">
                Social interactions a month
              </p>
            </div>
            <div className="flex gap-4 flex-col items-center">
              <p className="text-6xl font-extrabold">300k</p>
              <p className="text-2xl text-[#C2C7DC]">Unique monthly visitors</p>
            </div>
          </div>
          <p></p>
        </div>
      </div>
      <Something />
    </>
  );
};

export default Case;
