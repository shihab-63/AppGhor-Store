import React from "react";
import useAppsData from "../Hooks/useAppsData";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Container from "../Components/Container/Container";
import App from "../Components/TrandingApps/App";
import { ScrollRestoration } from "react-router";

const Apps = () => {
  const { apps } = useAppsData();
  return (
    <div className="py-12">
      <ScrollRestoration />
      <Container>
        <div className="text-center">
          <h1 className="text-2xl md:text-5xl font-semibold pb-3">
            Our All Applications
          </h1>
          <p className="text-sm md:text-base">
            Browse all our applications designed to boost your productivity.
          </p>
        </div>

        <div className="flex items-center justify-between mt-12">
          <p className="text-base md:text-md">({apps.length}) Apps Found</p>
          <label className="input w-44 md:w-fit focus-within:outline-none focus-within:border-violet-500 border-gray-300">
            <svg
              className="h-[1em] md:h-[1.5em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              className="grow bg-transparent border-none outline-none focus:outline-none focus:ring-0"
              placeholder="Search your apps"
            />
          </label>
        </div>

        {apps.length === 0 ? (
          <div className="w-full max-w-3xl md:max-w-5xl mx-auto">
            <DotLottieReact src="/loading.lottie" loop autoplay />
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 px-3 md:px-0 py-8">
            {apps.map((app) => (
              <App key={app.id} app={app} />
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};

export default Apps;
