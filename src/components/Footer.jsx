import React from "react";
import Insta from "../assets/instagram.png";
import FB from "../assets/facebook.png";
import Twitter from "../assets/twitter.png";
const Footer = () => {
  return (
    <footer className="grid md:grid-cols-4  justify-between gap-8 md:gap-24 px-4 md:px-28 py-12">
      <div className="flex flex-col  gap-4">
        <p className="font-extrabold text-2xl">
          Crator <span className="text-[#C3C7DD]">Studio</span>
        </p>
        <p className="text-xl text-[#C3C7DD]">
          © 2023 Crator Studio. <br /> All rights reserved.
        </p>
      </div>
      <div className="flex flex-col  gap-4">
        <div className="flex flex-col ">
          <p className="text-xl font-bold">Get in touch</p>
          <p className="text-xl text-[#C3C7DD]">
            123 W. Kanye Street Los Angeles, CA 90001
          </p>
        </div>
        <p className="text-[#C3C7DD]">(415) 555-1234 hello@crator.com</p>
      </div>
      <div className="flex flex-col  gap-4">
        <p className="text-xl font-bold">Company</p>
        <div className="flex flex-col justify-bewteen text-[#C3C7DD]">
          <a href="" className="text-lg">
            Home
          </a>
          <a href="" className="text-lg">
            Services
          </a>
          <a href="" className="text-lg">
            About
          </a>
          <a href="" className="text-lg">
            Work
          </a>
          <a href="" className="text-lg">
            Contact Us
          </a>
        </div>
      </div>
      <div className="flex flex-col  gap-4">
        <p className="text-xl font-bold">Follow us on social media</p>
        <p className="text-lg text-[#C3C7DD]">
          Stay connected and updated on our latest projects.
        </p>
        <div className="flex gap-2">
          <a href="" className="h-12 bg-[#22212A]  rounded-full w-12 p-2">
            <img src={Insta} alt="" className="w-full h-full  object-contain" />
          </a>
          <a href="" className="h-12 bg-[#22212A]  rounded-full w-12 p-2">
            <img src={FB} alt="" className="w-full h-full object-contain" />
          </a>
          <a href="" className="h-12 bg-[#22212A]  rounded-full w-12 p-2">
            <img
              src={Twitter}
              alt=""
              className="w-full h-full object-contain "
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
