import React from "react";

const Navcomp = () => {
  return (
    <nav
      id="navWrap"
      className="w-[1200px] py-2 px-0  top-0 z-30 backdrop-blur-2xl"
    >
      <div
        id="nav-content"
        className="w-[1100px] flex items-center  justify-between py-4 px-0 mx-auto my-0"
      >
        <h2 className=" font-extrabold text-xl">Samples.</h2>
        <ul id="nav-content-ul" className="flex items-center gap-2 list-none">
          <li className="mx-6 my-0">
            <a className=" hover:text-purple-500 transition-all ease-in font-Gilroy decoration-0 text-[1rem] font-medium #fff relative cursor-pointer">
              Home
            </a>
          </li>
          <li className="mx-6 my-0">
            <a className=" hover:text-purple-500 transition-all ease-in font-Gilroy decoration-0 text-[1rem] font-medium #fff relative cursor-pointer">
              Skills
            </a>
          </li>
          <li className="mx-6 my-0">
            <a className=" hover:text-purple-500 transition-all ease-in font-Gilroy decoration-0 text-[1rem] font-medium #fff relative cursor-pointer">
              Projects
            </a>
          </li>
          <li className="mx-6 my-0">
            <a className=" hover:text-purple-500 transition-all ease-in font-Gilroy decoration-0 text-[1rem] font-medium #fff relative cursor-pointer ">
              Contact Me
            </a>
          </li>
          <button
            className=" text-[0.9rem] font-medium flex items-center justify-center py-[0.6rem] px-8 border-none outline-none rounded cursor-pointer transition-all duration-0.3 ease-in bg-gradient-to-r from-purple-500 to-violet-600 hover:text-violet-400 hover:outline-violet-400 hover:from-black hover:to-black"
            id="contact-btn"
            onClick={() => {}}
          >
            Hire Me
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navcomp;
