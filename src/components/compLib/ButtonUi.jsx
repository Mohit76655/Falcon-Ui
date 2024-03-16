import React from "react";
import Buttoncomp from "./allComponents/Buttoncomp";
import Components from "./Components";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const ButtonUi = () => {
  const codeString = `const Button = ({ className, to, onClick, children, px, white }) => {
    const classes = button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 {dollar sign}{
      px || "px-7"
    } {dollar sign}{white ? "text-n-8" : "text-n-1"} {dollar sign}{className || ""};
    const spanClasses = "relative z-10";

    const renderButton = () => (
      <button className={classes} onClick={onClick}>
        <span className={spanClasses}>{children}</span>
        {ButtonSvg(white)}
      </button>
    );

    const renderLink = () => (
      <Link to={to} className={classes}>
        <span className={spanClasses}>{children}</span>
        {ButtonSvg(white)}
      </Link>
    );

    return to ? renderLink() : renderButton();
  };

  return <Button>hello</Button>;`;

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

        <div className="p-8">
          <Buttoncomp />
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

export default ButtonUi;
