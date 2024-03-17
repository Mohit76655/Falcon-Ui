import React from "react";
import { Link } from "react-router-dom";
import Cardcomp from "./allComponents/Cardcomp";

const Components = () => {
  return (
    <>
      <aside className=" border-r border-purple-300 overflow-hidden md:block w-[240px] overflow-y-auto h-screen py-4 bg-transparent absolute md:relative z-10 translate-x-[-240px] md:translate-x-0 scrollbar-none transition-all">
        <h2 className="p-2 mx-2 font-medium text-lg">Components</h2>
        <div className="p-4">
          <ul id="Card">
            <li className="p-1 hover:translate-x-1 transition-all ease-in cursor-pointer mx-10 mb-6">
              <Link to="/DocUi" title="Card">
                Docs
              </Link>
            </li>
            <li className="p-1 hover:translate-x-1 transition-all ease-in cursor-pointer mx-10 mb-6">
              <Link to="/Card" title="Card">
                Card
              </Link>
            </li>
            <li className="p-1 hover:translate-x-1 transition-all ease-in cursor-pointer mx-10 mb-6">
              <Link to="/ButtonUi" title="Button">
                Button
              </Link>
            </li>
            <li className="p-1 hover:translate-x-1 transition-all ease-in cursor-pointer mx-10 mb-6">
              <Link to="/Navui" title="NavBar">
                NavBar
              </Link>
            </li>
            <li className="p-1 hover:translate-x-1 transition-all ease-in cursor-pointer mx-10 mb-6">
              <Link to="/BentoBox" title="BentoBox">
                Form
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Components;
