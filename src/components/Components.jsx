import React from "react";
import { Link } from "react-router-dom";

const Components = () => {
  return (
    <>
      <aside className="md:block w-[240px] overflow-y-auto h-full py-4 bg-[#e41313] absolute md:relative z-10 translate-x-[-240px] md:translate-x-0 scrollbar-none transition-all">
        <h2 className="">Components</h2>
        <div className="p-4">
          <ul id="Card">
            <li className="p-1 hover:translate-x-1 transition-all ease-in cursor-pointer">
              <Link to="/" title="Card">
                Card
              </Link>
            </li>
            <li className="p-1 hover:translate-x-1 transition-all ease-in cursor-pointer">
              <Link to="/" title="Card">
                Card
              </Link>
            </li>
            <li className="p-1 hover:translate-x-1 transition-all ease-in cursor-pointer">
              <Link to="/" title="Card">
                Card
              </Link>
            </li>
            <li className="p-1 hover:translate-x-1 transition-all ease-in cursor-pointer">
              <Link to="/" title="Card">
                Card
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Components;
