import { useState } from "react";

import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const nav_links = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services" },
    { name: "About", link: "/about" },
    { name: "Work", link: "/work" },
    { name: "Case study", link: "/case" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <nav className=" w-full top-0 left-0 lg:px-32 md:py-6">
      <div className="md:flex justify-between py-4 lg:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center ">
          <p className="font-extrabold text-2xl">
            Crator <span className="text-[#C3C7DD]">Studio</span>
          </p>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="flex flex-col md:flex-row justify-between items-center "
        >
          <div className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden z-20">
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>
          <ul
            className={`w-full h-screen md:h-auto flex flex-col md:flex-row justify-center items-center absolute md:static md:bg-transparent bg-[#1A1921] md:z-auto z-[11] md:items-center md:justify-between
           gap-12 md:gap-36 transition-all duration-500 ease-in-out ${
             open ? "top-0" : "top-[-1000px]"
           }`}
          >
            <span className="flex flex-col md:flex-row justify-center gap-14 md:gap-8">
              {nav_links.map((link) => (
                <li
                  key={link.name}
                  className="flex items-center justify-center md:my-0  text-2xl md:text-lg font-medium text-[#C3C7DD]"
                >
                  <NavLink
                    to={link.link}
                    className={({ isActive }) =>
                      `${
                        isActive ? "bg-[#22202B] px-4 py-1 rounded-full" : ""
                      }hover:bg-[#22202B] px-4 py-1 rounded-full`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </span>
            <Link
              to="/connect"
              className="text-2xl md:text-lg bg-white hover:bg-[#22202B] hover:text-white transition-all text-[#18191F] md:px-8 px-12 md:py-2 py-4 rounded-full font-medium"
            >
              {`Let's`} talk
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
