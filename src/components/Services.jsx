import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";
import { brainwaveServicesIcons } from "../constants";
import {

  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

import Generating from "./Generating";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Samples Ui Design made for Developers."
          text="Falcon unlocks the potential of Developers"
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
            <nav
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
              <a className="font-Gilroy decoration-0 text-[1rem] font-medium #fff relative cursor-pointer" >Home</a>
            </li>
            <li className="mx-6 my-0">
              <a className="font-Gilroy decoration-0 text-[1rem] font-medium #fff relative cursor-pointer">Skills</a>
            </li>
            <li className="mx-6 my-0">
              <a className="font-Gilroy decoration-0 text-[1rem] font-medium #fff relative cursor-pointer">Projects</a>
            </li>
            <li className="mx-6 my-0">
              <a className="font-Gilroy decoration-0 text-[1rem] font-medium #fff relative cursor-pointer ">Contact Me</a>
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
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="Smartest AI"
                height={730}
                src={service1}
              />
            </div>
            <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" />
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
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
              <h4 className="h4 mb-4 ">Ai Integration</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                 Coming Soon!
                </p>
              </div>
            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4"> UI Component Generation</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis nostrum tempore nemo.
                </p>

                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, index ,{isActive}) => (
                    <li
                      key={index}
                      className={`rounded-2xl flex items-center justify-center ${
                        index === 2
            
                          ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15" 
                      }`}
                    >
                      <div
                        className={
                          index === 2 
                            ? "flex items-center justify-center w-full  h-full bg-n-7 rounded-[1rem]"
                            : ""
                        }
                      >
                        <img src={item} width={24} height={24} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={service3}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Scary robot"
                />
                <VideoBar />
              </div>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
