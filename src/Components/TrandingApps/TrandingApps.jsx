import React from "react";
import Container from "../Container/Container";
import useAppsData from "../../Hooks/useAppsData";
import Apps from "./Apps";
import { Link } from "react-router";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const TrandingApps = () => {
  const { apps, loading } = useAppsData();
  const eightApps = apps.slice(0, 8);
  return (
    <div className="py-12">
      <Container>
        <div className="text-center">
          <h1 className="text-3xl md:text-6xl font-semibold">Trending Apps</h1>
          <p className="text-gray-500 pt-3 text-sm md:text-lg">
            Explore our hand-picked trending apps built for everyday
            productivity
          </p>
        </div>

        {loading ? (
          <div className="w-full max-w-3xl md:max-w-5xl mx-auto">
            <DotLottieReact src="/loading.lottie" loop autoplay />
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 px-3 md:px-0 py-8">
            {eightApps.map((app) => (
              <Apps key={app.id} app={app} />
            ))}
          </div>
        )}
        <div className="mx-auto flex justify-center">
          <Link className="bg-linear-to-r from-[#9F62F2] to-[#632EE3] btn text-base px-10 py-6 text-white">
            Show All
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default TrandingApps;
