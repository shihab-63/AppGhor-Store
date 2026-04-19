import React, { useState } from "react";
import { getInstalledData } from "../Utils/localStorage";
import Container from "../Components/Container/Container";
import { Divide } from "lucide-react";
import InstallAppCard from "../Components/InstallAppCard/InstallAppCard";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Installation = () => {
  const [installData, setInstallData] = useState(() => getInstalledData());
  const [sortOrder, setSortOrder] = useState("");

  const sortedData = [...installData].sort((a, b) => {
    if (sortOrder === "low") {
      return a.downloads - b.downloads;
    } else if (sortOrder === "high") {
      return b.downloads - a.downloads;
    } else {
      return 0;
    }
  });
  return (
    <div className="px-3 md:px-0">
      <Container>
        {/* Normal Text */}
        <div className="text-center my-12">
          <h1 className="text-2xl md:text-4xl font-semibold pb-3">
            Your Installed Apps
          </h1>
          <p className="text-sm md:text-base text-gray-400">
            Explore your installed apps in one place.
          </p>
        </div>
        {/* Sort  */}
        <div className="flex justify-between items-center">
          <p className="text-sm md:text-xl">
            ({installData.length}) Apps Found
          </p>
          <div>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="select select-primary w-44 md:w-52 outline-0"
            >
              <option value="">Sort by Download</option>
              <option value="low">Low - High</option>
              <option value="high">High - Low</option>
            </select>
          </div>
        </div>

        {/* LocalStore Data */}
        {installData.length === 0 ? (
          <div className="text-center py-15">
            <DotLottieReact
              className="md:w-96 mx-auto"
              loop
              autoplay
              src="/NoItemFound.lottie"
            />
            <p className="text-lg font-medium pt-4">
              Your installed apps will appear here!
            </p>
            <span className="text-gray-400 font-light">
              Go ahead, install something cool! ⚡
            </span>
          </div>
        ) : (
          <div className="my-12">
            {sortedData.map((data) => (
              <InstallAppCard
                key={data.id}
                data={data}
                setInstallData={setInstallData}
              />
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};

export default Installation;
