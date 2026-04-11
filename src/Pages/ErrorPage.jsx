import React from "react";
import Container from "../Components/Container/Container";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Header from "../Components/Shared/Header";
import Footer from "../Components/Shared/Footer";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <Container>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex flex-col flex-1 text-center">
          <DotLottieReact
            className="md:w-5xl lg:w-6xl mx-auto"
            src="/public/PageNotFound.lottie"
            autoplay
            loop
          />
          <h1 className="text-2xl md:text-6xl font-semibold">
            Oops, page not found!
          </h1>
          <p className="text-sm md:text-2xl text-gray-500 py-3">
            The page you are looking for is not available.
          </p>
          <Link
            to={"/"}
            className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] w-fit mx-auto py-2 px-6 rounded text-white font-semibold cursor-pointer active:scale-95"
          >
            Go Back!
          </Link>
        </div>
        <Footer />
      </div>
    </Container>
  );
};

export default ErrorPage;
