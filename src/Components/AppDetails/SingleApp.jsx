import React, { useState } from "react";
import Swal from "sweetalert2";
import Container from "../Container/Container";
import { addToInstalled, getInstalledData } from "../../Utils/localStorage";

// Assets
import downloadImg from "../../assets/icon-downloads.png";
import ratingImg from "../../assets/icon-ratings.png";
import reviewImg from "../../assets/icon-review.png";

const SingleApp = ({ app }) => {
  // Lazy Initialization
  const [isInstalled, setIsInstalled] = useState(() => {
    const savedData = getInstalledData();
    return savedData.some((p) => p?.id === app?.id);
  });

  if (!app) return null;

  const {
    image,
    title,
    downloads,
    ratingAvg,
    description,
    size,
    companyName,
    reviews,
  } = app;

  const formatNumber = (num) => {
    return new Intl.NumberFormat("en-US", { notation: "compact" }).format(
      num || 0,
    );
  };

  const handleInstall = async () => {
    if (isInstalled) return;

    const result = await Swal.fire({
      title: `Install ${title}?`,
      text: "Do you want to proceed with the installation?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#8b5cf6",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Yes, Install",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      const isSuccess = addToInstalled(app);

      if (isSuccess) {
        setIsInstalled(true);
        Swal.fire({
          title: "Installed!",
          text: `${title} has been installed successfully.`,
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });
      } else {
        Swal.fire("Oops!", "Failed to install or already installed.", "error");
      }
    }
  };

  return (
    <Container>
      {/* Main Content Wrapper */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 mt-8">
        {/* App Image */}
        <figure className="shrink-0">
          <img
            className="w-72 md:w-96 md:h-80 shadow-lg object-cover rounded-3xl border border-gray-100"
            src={image}
            alt={`${title} thumbnail`}
          />
        </figure>

        {/* App Details */}
        <div className="flex-1 w-full text-center md:text-left">
          <header className="mb-6">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 tracking-tight">
              {title}
            </h1>
            <p className="pt-2 text-gray-500 font-medium tracking-wide">
              Developed by{" "}
              <span className="font-bold bg-linear-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
                {companyName}
              </span>
            </p>
          </header>

          <hr className="border-gray-200 mb-6" />

          {/* Stats Section */}
          <div className="flex items-center justify-around px-6 md:px-12 py-6 rounded-2xl shadow-sm bg-white border border-gray-50 my-8">
            <StatCard
              icon={downloadImg}
              title="Downloads"
              value={formatNumber(downloads)}
              valueColor="text-green-500"
            />
            <StatCard
              icon={ratingImg}
              title="Ratings"
              value={ratingAvg}
              valueColor="text-amber-500"
            />
            <StatCard
              icon={reviewImg}
              title="Reviews"
              value={formatNumber(reviews)}
              valueColor="text-violet-500"
            />
          </div>

          {/* Action Button */}
          <div className="mb-8">
            <button
              onClick={handleInstall}
              className={`btn px-12 md:px-14 py-4 md:py-4 rounded-xl border-none text-white text-lg font-semibold transition-all duration-300 ${
                isInstalled
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed shadow-inner"
                  : "bg-linear-to-r from-violet-600 to-fuchsia-500 shadow-xl hover:shadow-violet-500/30 hover:-translate-y-1"
              }`}
            >
              {isInstalled ? "✓ Installed" : `Install App (${size} MB)`}
            </button>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="mt-16 mb-12 md:max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 relative inline-block mb-8">
          Description
          <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-linear-to-r from-violet-500 to-fuchsia-500 rounded-full opacity-80"></span>
        </h2>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed text-justify md:text-center px-4">
          {description}
        </p>
      </div>
    </Container>
  );
};

const StatCard = ({ icon, title, value, valueColor }) => (
  <div className="flex flex-col items-center gap-2">
    <img className="w-8 h-8 object-contain opacity-80" src={icon} alt={title} />
    <span className="text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider">
      {title}
    </span>
    <p className={`text-2xl md:text-3xl font-extrabold ${valueColor}`}>
      {value}
    </p>
  </div>
);

export default SingleApp;
