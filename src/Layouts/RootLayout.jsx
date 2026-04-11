import React from "react";
import Header from "../Components/Shared/Header";
import { Outlet } from "react-router";
import Footer from "../Components/Shared/Footer";

const RootLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 md:px-0">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
