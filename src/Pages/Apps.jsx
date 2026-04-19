import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useState } from "react";
import { ScrollRestoration } from "react-router";
import Container from "../Components/Container/Container";
import App from "../Components/TrandingApps/App";
import useAppsData from "../Hooks/useAppsData";

const Apps = () => {
  const { apps } = useAppsData();
  const [search, setSearch] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const filteredApps = apps.filter((app) =>
    app.title.toLowerCase().includes(search.toLowerCase()),
  );

  const handleChange = (e) => {
    const searchOnly = e.target.value;
    setIsSearching(true);
    setTimeout(() => {
      setSearch(searchOnly);
      setIsSearching(false);
    }, 500);
  };

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
          <p className="text-base md:text-md">
            ({filteredApps.length}) Apps Found
          </p>
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
              value={search}
              onChange={handleChange}
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
        ) : filteredApps.length === 0 ? (
          <div className="text-center py-15">
            <DotLottieReact
              className="md:w-96 mx-auto"
              loop
              autoplay
              src="/NoItemFound.lottie"
            />
            <p className="text-lg font-medium pt-4">
              Oops! No apps found for "{search}"
            </p>
            <span className="text-gray-400 font-light">
              Try searching with a different keyword.⚡
            </span>
          </div>
        ) : isSearching ? (
          <div className="text-center py-15">
            <DotLottieReact
              className="md:w-96 mx-auto"
              loop
              autoplay
              src="/Search.lottie"
            />
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 px-3 md:px-0 py-8">
            {filteredApps.map((app) => (
              <App key={app.id} app={app} />
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};

export default Apps;
