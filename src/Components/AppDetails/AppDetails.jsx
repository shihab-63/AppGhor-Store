import React from "react";
import useAppsData from "../../Hooks/useAppsData";
import Container from "../Container/Container";
import { Link, ScrollRestoration, useNavigate, useParams } from "react-router";
import { ChevronLeft, MoveLeft } from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import SingleApp from "./SingleApp.jsx";

const AppDetails = () => {
  const navigate = useNavigate();
  const { apps, loading } = useAppsData();
  const { id } = useParams();
  const app = apps.find((a) => a.id === Number(id));
  if (loading || apps.length === 0) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <ScrollRestoration />
        <DotLottieReact
          className="md:w-3xl mx-auto"
          src="/loading.lottie"
          loop
          autoplay
        />
      </div>
    );
  }
  if (!app) {
    return (
      <div className="pb-12 md:pb-32 px-3 md:px-0">
        <div className="text-center">
          <DotLottieReact
            className="md:w-3xl mx-auto"
            src="/Empty.lottie"
            loop
            autoplay
          />
          <h1 className="text-2xl py-3 md:text-4xl font-semibold">
            OPPS!! APP NOT FOUND
          </h1>
          <p className="pb-8 text-sm md:text-base">
            The App you are requesting is not found on our system. please try
            another apps
          </p>
          <Link
            className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] cursor-pointer btn text-white py-2 px-5 rounded inline-flex items-center"
            onClick={() => navigate(-1)}
          >
            <ChevronLeft size={20} />
            Go Back!
          </Link>
        </div>
      </div>
    );
  }
  return (
    <Container>
      <div>
        {/* Back Button */}
        <div
          onClick={() => navigate(-1)}
          className="cursor-pointer flex items-center gap-2 my-5 rounded transition-all duration-300 px-3 py-1 w-fit group hover:text-violet-600"
        >
          <MoveLeft className="group-hover:-translate-x-2 transition-all duration-300" />
          Go Back...
        </div>

        <div>
          <SingleApp app={app} />
        </div>
      </div>
    </Container>
  );
};

export default AppDetails;
