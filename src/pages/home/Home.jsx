import React from "react";
import Hero from "./Hero";
import WhyChoose from "./WhyChoose";
import Products from "../shop/Products";
import Experiences from "./Experiences";
import Materials from "./Materials";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <>
      <Hero />
      <WhyChoose />
      <Products headline="Best Selling Products" />
      <Experiences />
      <Materials />
      <Testimonial />
    </>
  );
};

export default Home;
