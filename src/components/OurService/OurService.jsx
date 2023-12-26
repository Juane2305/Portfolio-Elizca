import React from "react";
import img from './img/five-stars.png'

const OurService = () => {
  return (
    <div className="h-screen w-full bg-[#0D0D0D]">
      <h1 className="text-gray-100 font-bold text-[40px] text-center">
        Our Service
      </h1>
      <div className="flex flex-col text-center justify-between">
        
        <section className="flex flex-col justify-evenly items-center  mt-10 space-y-16  lg:flex-row lg:space-y-0 lg:mb-16">
          <div className=" text-center w-80 lg:w-60 lg:h-20 lg:px-2">
            <span className="text-purple-500 lg:h-10 text-lg font-bold md:text-2xl">
              Custom web design
            </span>
            <p className="text-gray-100 mt-2 text-sm md:text-base">
              We translate your idea into a modern website.
            </p>
          </div>
          <div className=" text-center w-80 lg:w-60 lg:h-20 lg:px-2">
            <span className="text-purple-500 h-10 text-lg font-bold md:text-2xl">
              Responsive design
            </span>
            <p className="text-gray-100 mt-2 text-sm md:text-base">
              Our websites work perfectly on all screen sizes.
            </p>
          </div>
          <div className=" text-center w-80 lg:w-60 lg:h-20 lg:px-2">
            <span className="text-purple-500 h-10 text-lg font-bold md:text-2xl">
              Continuous mantainance
            </span>
            <p className="text-gray-100 mt-2 text-sm md:text-base">
              We offer 1 month of free mantainance.
            </p>
          </div>
          <div className=" text-center w-80 lg:w-60 lg:h-20 lg:px-2">
            <span className="text-purple-500 h-10 text-lg font-bold md:text-2xl">
              E-commerce website
            </span>
            <p className="text-gray-100 mt-2 text-sm md:text-base">
              We empower your online store with intuitive and secure features.
            </p>
          </div>
        </section>
        <section className="flex justify-center mt-3">
          <img src={img}alt="5 stars" className="w-[30rem]"/>
        </section>
      </div>
    </div>
  );
};

export default OurService;
