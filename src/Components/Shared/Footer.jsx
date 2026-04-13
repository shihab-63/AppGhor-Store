import React from "react";
import heroImg from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-800 border-t border-gray-200">
      <div className="container mx-auto pt-12 pb-8 md:pt-16">
        <div className="flex flex-col md:flex-row justify-between mx-3 md:mx-0 gap-12 text-left">
          <div className="md:col-span-1 flex flex-col items-start">
            <div className="w-16 h-16 mb-5">
              <img
                src={heroImg}
                alt="App Ghor logo"
                className="w-full h-full object-contain"
              />
            </div>

            <h2 className="text-3xl font-bold text-black mb-3">
              App Ghor <span className="text-violet-600">Inc.</span>
            </h2>
            <p className="text-sm text-gray-600 max-w-sm leading-relaxed">
              Explore the universe of productive apps. We craft innovative apps
              that simplify your daily life and amplify your productivity.
            </p>
          </div>

          <div className="flex flex-col items-start gap-3">
            <h3 className="text-sm font-bold uppercase tracking-wider mb-5 bg-clip-text text-transparent bg-linear-to-r from-violet-600 to-fuchsia-500">
              Our Services
            </h3>

            {[
              "UI/UX Design",
              "Web Development",
              "API Integration",
              "App Marketing",
            ].map((service) => (
              <a
                href="#"
                key={service}
                className="text-gray-600 hover:text-violet-600 transition-colors duration-200 font-medium"
              >
                {service}
              </a>
            ))}
          </div>

          <div className="flex flex-col items-start gap-3">
            <h3 className="text-sm font-bold uppercase tracking-wider mb-5 bg-clip-text text-transparent bg-linear-to-r from-violet-600 to-fuchsia-500">
              About App Ghor
            </h3>

            {["Our Mission", "Careers", "Blog", "Contact"].map((item) => (
              <a
                href="#"
                key={item}
                className="text-gray-600 hover:text-violet-600 transition-colors duration-200 font-medium"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex flex-col items-start gap-3">
            <h3 className="text-sm font-bold uppercase tracking-wider mb-5 bg-clip-text text-transparent bg-linear-to-r from-violet-600 to-fuchsia-500">
              Legal Info
            </h3>

            {[
              "Terms of Service",
              "Privacy Policy",
              "Cookie Policy",
              "License",
            ].map((legal) => (
              <a
                href="#"
                key={legal}
                className="text-gray-600 hover:text-violet-600 transition-colors duration-200 font-medium"
              >
                {legal}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-gray-500 text-sm text-center">
          &copy; 2026 <span className="font-bold text-black">App Ghor</span> —
          Crafted with <span className="text-red-500">❤️</span> by Shihab. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
