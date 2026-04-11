import React from "react";
import appleImg from "../../assets/apple.png";
import googlePlayStore from "../../assets/playstore.png";
import heroImg from "../../assets/hero.png";
import { Link } from "react-router";

const HeroSection = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center mt-12 pb-10">
      <h1 className="text-center text-2xl md:text-7xl font-semibold ">
        We Build <br className="hidden md:block" />{" "}
        <span className="bg-linear-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
          Productive
        </span>{" "}
        Apps
      </h1>
      <p className="text-center text-sm max-w-75 md:max-w-full md:text-lg">
        We craft innovative apps that simplify your daily life and{" "}
        <br className="hidden md:block" /> amplify your productivity.
      </p>
      <div className="flex flex-col md:flex-row items-center  gap-3">
        <Link
          target="blank"
          to={"https://play.google.com/store/games?device=windows"}
          className="flex items-center gap-3 border border-gray-300 py-2 px-8 md:px-6 cursor-pointer  transition-all duration-300 hover:scale-95 rounded"
        >
          <img src={googlePlayStore} alt="Google Play Store" />
          Google Play
        </Link>
        <Link
          target="blank"
          to={"https://apps.apple.com/us/iphone/today"}
          className="flex items-center gap-3 border border-gray-300 py-2 px-12 md:px-6 cursor-pointer  transition-all duration-300 hover:scale-95 rounded"
        >
          <img src={appleImg} alt="Apple Store" />
          App Store
        </Link>
      </div>
      <img className="mt-8 md:mt-10" src={heroImg} alt="Hero Section image" />
    </div>
  );
};

export default HeroSection;
