import React from "react";
import { service1, service2, service3, check } from "../../../assets";
const Cardcomp = () => {
  return (
    <>
      <div className="relative min-h-[30rem] border border-n-1/10 rounded-3xl overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={service2}
            className="h-full w-full object-cover"
            width={630}
            height={750}
            alt="robot"
          />
        </div>

        <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15 opacity-0 hover:opacity-[1] cursor-pointer">
          <h4 className="h4 mb-4 ">Photo editing</h4>
          <p className="body-2 mb-[3rem] text-n-3">
            Automatically enhance your photos using our AI app&apos;s photo
            editing feature. Try it now!
          </p>
        </div>
      </div>
    </>
  );
};

export default Cardcomp;
