import React, { useState } from "react";
import downloadImg from "../../assets/icon-downloads.png";
import ratingImg from "../../assets/icon-ratings.png";
import reviewImg from "../../assets/icon-review.png";
import { Link } from "react-router";
import Swal from "sweetalert2";
import Container from "../Container/Container";

const SingleApp = ({ app }) => {
  const [isInstall, setIsinstall] = useState(false);
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

  const handleInstallBtn = () => {
    Swal.fire({
      title: `Do you want to Install ${title}?`,
      showDenyButton: true,
      confirmButtonText: "Install",
      denyButtonText: `Don't Install`,
    }).then((result) => {
      if (result.isConfirmed) {
        setIsinstall(true);
        Swal.fire(
          "Installed!",
          `${title} has been installed successfully`,
          "success",
        );
      } else if (result.isDenied)
        Swal.fire("Cancelled", "Installation was cancelled", "info");
    });
  };
  return (
    <Container>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <figure>
          <img
            className="w-72 md:w-96 md:h-80 shadow-xl object-cover rounded-2xl"
            src={image}
            alt={title}
          />
        </figure>

        <div className="flex-1 ">
          <div className="">
            <h1 className="text-2xl md:text-4xl font-semibold">{title}</h1>
            <p className="pt-1 pb-5 text-gray-400">
              Developed by{" "}
              <span className="font-bold bg-linear-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                {companyName}
              </span>
            </p>
          </div>
          <hr className="border-gray-300" />
          <div className="flex items-center justify-around gap-8 px-12 py-4 md:py-8 rounded-xl shadow bg-white my-6">
            <div className="text-center">
              <img
                className="mx-auto pb-2"
                src={downloadImg}
                alt="Download Image"
              />
              <span className="text-base pb-2 text-gray-400">Downloads</span>
              <p className="text-2xl md:text-3xl text-green-500 font-bold">
                {new Intl.NumberFormat("en-US", { notation: "compact" }).format(
                  downloads,
                )}
              </p>
            </div>
            <div className="text-center">
              <img
                className="mx-auto pb-2"
                src={ratingImg}
                alt="Download Image"
              />
              <span className="text-base pb-2 text-gray-400">Ratings</span>
              <p className="text-2xl md:text-3xl text-amber-500 font-bold">
                {ratingAvg}
              </p>
            </div>
            <div className="text-center">
              <img
                className="mx-auto pb-2"
                src={reviewImg}
                alt="Download Image"
              />
              <span className="text-base pb-2 text-gray-400">Reviews</span>
              <p className="text-2xl md:text-3xl text-violet-500 font-bold">
                {new Intl.NumberFormat("en-US", { notation: "compact" }).format(
                  reviews,
                )}
              </p>
            </div>
          </div>
          <div className="mb-8">
            <button
              onClick={handleInstallBtn}
              disabled={isInstall}
              className={`btn px-12 border-none text-white transition-all duration-300 ${
                isInstall
                  ? "bg-gray-400"
                  : "bg-linear-to-r from-violet-600 to-fuchsia-500 shadow-md"
              }`}
            >
              {isInstall ? "Installed" : ` Install (${size} MB)`}
            </button>
          </div>
        </div>
      </div>
      <div className="mb-8 md:w-92 md:max-w-3xl lg:w-full text-center mx-auto">
        <h1 className="font-heading font-heading text-3xl font-semibold mb-6 text-slate-800 relative inline-block">
          Description
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-52 h-0.75 bg-linear-to-r from-blue-500 to-indigo-500/50 rounded-full"></span>
        </h1>
        <p className="font-p text-sm md:text-lg text-slate-600 leading-relaxed text-justify md:text-center">
          {description}
        </p>
      </div>
    </Container>
  );
};

export default SingleApp;
