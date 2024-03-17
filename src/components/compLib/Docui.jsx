import React from "react";
import DocComp from "./allComponents/DocComp";
import Components from "./Components";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Docui = () => {
  return (
    <div className="flex flex-row h-[calc(100%-240px)]">
      <Components />
      <div className=" bg-transparent h-full  w-full mx-12 ">
        <div className="p-5">
          <h2 className=" font-bold text-4xl">Docs</h2>
          <p className=" text-slate-400 mt-5">
            This is a component library. It's a collection of re-usable
            components that you can copy and paste into your apps.
          </p>
        </div>
        <div className=" m-5 bg-transparent rounded-md mt-10">
          <DocComp />
        </div>
      </div>
    </div>
  );
};

export default Docui;
