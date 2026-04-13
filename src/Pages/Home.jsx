import React from "react";
import Container from "../Components/Container/Container";
import HeroSection from "../Components/HeroSection/HeroSection";
import RatingSection from "../Components/RatingSection/RatingSection";
import TrandingApps from "../Components/TrandingApps/TrandingApps";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <RatingSection />
      <TrandingApps />
    </div>
  );
};

export default Home;
