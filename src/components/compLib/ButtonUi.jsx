import React from "react";
import Buttoncomp from "./allComponents/Buttoncomp";
import Components from "./Components";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const ButtonUi = () => {
  const codeString = ``;

  return (
    <div className="flex flex-row h-[calc(100%-240px)]">
      <Components />
      <div className=" bg-transparent h-full  w-full mx-24 ">
        <div className="p-5">
          <h2 className=" font-bold text-4xl">Button</h2>
          <p className=" text-slate-400 mt-5">
            Displays a card with header, content, and footer.
          </p>
        </div>

        <span className="p-5 text-gray-400">Preview </span>

        <div className=" p-5">
          <Buttoncomp />
        </div>

        <div className="my-12 p-5 w-[50%] max-w-2xl min-w-[25rem] bg-[#3a404d] rounded-md overflow-hidden">
          <span className=" text-gray-400">Code</span>
          <SyntaxHighlighter
            language="jsx"
            style={atomOneDark}
            customStyle={{ padding: "25px", fontSize: "1rem" }}
          >
            {``}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default ButtonUi;
