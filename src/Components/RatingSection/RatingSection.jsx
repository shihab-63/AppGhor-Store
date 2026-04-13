import React from "react";
import Container from "../Container/Container";

const RatingSection = () => {
  return (
    <div className="bg-linear-to-r from-[#642ee3d7] to-[#9e62f2e0]  min-h-44 md:min-h-120 text-white flex items-center">
      <Container>
        <div className="flex justify-center items-center flex-col gap-8 py-8">
          <h1 className="text-xl md:text-6xl mb-8 text-center font-semibold">
            Trusted by Millions, Built for You
          </h1>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="bg-linear-to-r from-purple-500 to-pink-500 py-12 px-18 rounded-2xl text-center hover:-translate-y-2 transition-all hover:shadow-xl duration-300">
              <p className="text-sm md:text-xl">Total Downloads</p>
              <p className="text-4xl md:text-5xl font-semibold py-2">29.6M</p>

              <p className="text-sm md:text-xl">21% more than last month</p>
            </div>
            <div className="bg-linear-to-r from-sky-500 to-blue-600 py-12 px-18 rounded-2xl text-center hover:-translate-y-2 transition-all hover:shadow-xl duration-300">
              <p className="text-sm md:text-xl">Total Reviews</p>
              <p className="text-4xl md:text-5xl font-semibold py-2">906K</p>
              <p className="text-sm md:text-xl">46% more than last month</p>
            </div>
            <div className="bg-linear-to-r from-emerald-500 to-teal-400 py-12 px-24 rounded-2xl text-center hover:-translate-y-2 transition-all hover:shadow-xl duration-300">
              <p className="text-sm md:text-xl">Active Apps</p>
              <p className="text-4xl md:text-5xl font-semibold py-2">132+</p>
              <p className="text-sm md:text-xl">31 more will Launch</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RatingSection;
