import React from "react";
import DocComp from "./allComponents/DocComp";
import Components from "./Components";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Docui = () => {
  const codeString = `<nav
    id="navWrap"
    className="w-[1200px] py-2 px-0  top-0 z-30 backdrop-blur-2xl"
  >
    <div
      id="nav-content"
      className="w-[1100px] flex items-center  justify-between py-4 px-0 mx-auto my-0"
    >
      <h2 className=" font-extrabold text-xl">Samples</h2>
      <ul id="nav-content-ul" className="flex items-center gap-2 list-none">
        <li className="mx-6 my-0">
          <a className="font-Gilroy decoration-0 text-[1rem] font-medium #fff relative cursor-pointer">
            Home
          </a>
        </li>
        <li className="mx-6 my-0">
          <a className="font-Gilroy decoration-0 text-[1rem] font-medium #fff relative cursor-pointer">
            Skills
          </a>
        </li>
        <li className="mx-6 my-0">
          <a className="font-Gilroy decoration-0 text-[1rem] font-medium #fff relative cursor-pointer">
            Projects
          </a>
        </li>
        <li className="mx-6 my-0">
          <a className="font-Gilroy decoration-0 text-[1rem] font-medium #fff relative cursor-pointer ">
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
  </nav>`;

  return (
    <div className="flex flex-row h-[calc(100%-240px)]">
      <Components />
      <div className=" bg-transparent h-full  w-full mx-12 ">
        <div className="p-5">
          <h2 className=" font-bold text-4xl">NavBar</h2>
          <p className=" text-slate-400 mt-5">
            Displays a card with header, content, and footer.
          </p>
        </div>

        <span className="p-5 text-gray-400">Preview </span>

        <div className=" m-5 bg-gray-900 rounded-md">
          <DocComp />
        </div>

        <div className="my-12 p-5 w-[50%] max-w-2xl min-w-[25rem] bg-[#3a404d] rounded-md overflow-hidden">
          <span className=" text-gray-400">Code</span>
          <SyntaxHighlighter
            language="jsx"
            style={atomOneDark}
            customStyle={{ padding: "25px", fontSize: "1rem" }}
          >
            {codeString}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default Docui;
