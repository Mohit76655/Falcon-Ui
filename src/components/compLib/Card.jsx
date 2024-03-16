import React from "react";
import Components from "./Components";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Card = () => {
  const codeString = `<div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
    <div className="absolute inset-0">
      <img
        src={your image}
        className="h-full w-full object-cover"
        width={630}
        height={750}
        alt="robot"
      />
    </div>

    <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
      <h4 className="h4 mb-4">Photo editing</h4>
      <p className="body-2 mb-[3rem] text-n-3">
        Automatically enhance your photos using our AI app&apos;s
        photo editing feature. Try it now!
      </p>
    </div>
  </div>`;

  return (
    <div className="flex flex-row h-[calc(100%-240px)]">
      <Components />
      <div className=" bg-transparent h-full  w-full  ">
        <div className="p-5">
          <h2 className=" font-bold text-4xl">Card</h2>
          <p className=" text-slate-400 mt-5">
            Displays a card with header, content, and footer.
          </p>
        </div>

        <div className=""></div>

        <div className="p-5 w-[50%] max-w-2xl min-w-[25rem] bg-[#3a404d] rounded-md overflow-hidden">
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

export default Card;
