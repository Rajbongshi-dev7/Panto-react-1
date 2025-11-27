import React from "react";
import bannerImg from "../../assets/images/banner.png";
import { FaSearch } from "react-icons/fa";
import TooltipButton from "../../components/TooltipButton";
const Hero = () => {
  return (
    <section
      className="h-screen relative bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="md:pt-30 pt-24 px-2 text-center space-y-7 md:w-3/4 mx-auto">
        <h1 className="text-4xl lg:text-7xl lg:w-4/5 mx-auto md:text-6xl px-2 font-bold lg:leading-tight leading-snug ">
          Make your interior more minimalistic & modern
        </h1>
        <p className="text-sm lg:text-2xl md:text-xl lg:w-1/2 mx-auto">
          Turn your room with panto into a lot more minimalist and modern with
          ease and speed
        </p>
        {/* search feild */}
        <div className="relative inline-block z-30">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search furniture"
            className="w-full md:w-80 px-6 py-2 placeholder:text-white bg-white/25 rounded-full border border-gray-300 focus:outline-none"
          />
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary rounded-full cursor-pointer p-2">
            <FaSearch />
          </div>
        </div>
      </div>
      {/* bottom shadow effect */}
      <div className="absolute inset-x-0 bottom-0 h-1/5 -mb-2 bg-gradient-to-t from-white via-transparent to-transparent blur-sm" />
      {/* hover button for displaying tooltip box */}

      <div className="hidden xl:block absolute bottom-40 left-24">
        <TooltipButton position="bottom" />
      </div>
      <div className="hidden xl:block absolute bottom-56 left-90">
        <TooltipButton position="bottom" />
      </div>
      <div className="hidden xl:block absolute bottom-28 right-200">
        <TooltipButton position="bottom" />
      </div>
      <div className="hidden xl:block absolute bottom-18 right-16">
        <TooltipButton position="bottom" />
      </div>
    </section>
  );
};

export default Hero;
