import React from "react";
import materialOneImg from "../../assets/images/material_1.png";
import materialTwoImg from "../../assets/images/material_2.png";
import materialThreeImg from "../../assets/images/material_3.png";
import Button from "../../components/Button";

const Materials = () => {
  return (
    <section className="section-container my-24 flex flex-col md:flex-row items-center justify-between md:gap-20 gap-8">
      <div className="md:w-2/5 mx-auto">
        <h3 className="uppercase text-lg font-semibold text-primary mb-4">
          materials
        </h3>
        <h2 className=" capitalize text-4xl font-bold md:w-3/4 lg:w-1/2 mb-4">
          Very serious materials for making furniture
        </h2>
        <p className="text-[#1E1E1E] mb-5 md:w-3/4 lg:w-1/2">
          Because panto was very serious about designing furniture for our
          environment, using a very expensive and famous capital but at a
          relatively low price
        </p>
        <Button text={"More Info"} />
      </div>
      <div className="md:w-1/2 grid md:grid-cols-3 grid-cols-2 md:items-end items-center">
        <div>
          <img src={materialOneImg} alt="" />
          <img src={materialTwoImg} alt="" />
        </div>
        <div className="md:col-span-2 col-span-1">
          <img
            src={materialThreeImg}
            alt=""
            className="w-full drop-shadow-2xl  md:h-[541px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Materials;
