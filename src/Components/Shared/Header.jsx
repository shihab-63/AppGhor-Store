import React, { useState } from "react";
import Container from "../Container/Container";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router";
import { FaGithub } from "react-icons/fa";
import { Menu, X } from "lucide-react";
import { CiMenuFries } from "react-icons/ci";
import { MdOutlineClose } from "react-icons/md";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const links = [
    { name: "Home", path: "/" },
    { name: "Apps", path: "/apps" },
    { name: "Installation", path: "/installation" },
  ];

  const activeLink = ({ isActive }) =>
    isActive
      ? "border-b-2 border-fuchsia-300 bg-linear-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent pb-1"
      : "border-b-2 pb-1 border-transparent";

  const navLink = links.map((link, index) => (
    <li key={index}>
      <NavLink to={link.path} className={activeLink}>
        {link.name}
      </NavLink>
    </li>
  ));

  return (
    <Container>
      <div className="py-3 flex items-center justify-between">
        {/* Logo Section */}
        <Link to={"/"} className="flex w-fit items-center gap-2">
          <img className="w-8 md:w-12" src={logo} alt="Logo" />
          <h2 className="text-xl md:text-3xl font-semibold">
            App{" "}
            <span className="bg-linear-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
              Ghor
            </span>
          </h2>
        </Link>

        {/* NavLink Here */}
        <ul className="hidden md:flex text-xl font-semibold items-center gap-8">
          {navLink}
        </ul>
        {/* Button */}
        <div className="flex items-center gap-2">
          <Link
            target="blank"
            to={"https://github.com/shihab-63"}
            className="flex items-center gap-2 bg-linear-to-r from-[#632EE3] to-[#9F62F2] py-1 md:py-2 px-2 md:px-3 text-white rounded"
          >
            <FaGithub size={18} />
            Contribute
          </Link>
          <div className="cursor-pointer md:hidden" onClick={() => setToggle(!toggle)}>
            {toggle ? <MdOutlineClose size={26} /> : <CiMenuFries size={26} />}
          </div>
        </div>
      </div>

      {/* Mobile Design */}
      <div>
        {/* Black Overlay */}
        <div className="md:hidden">
          {toggle && (
            <div
              onClick={() => setToggle(false)}
              className="fixed z-20 transition-opacity inset-0 bg-black/50"
            ></div>
          )}
        </div>

        {/* Menu Design */}
        <div className="md:hidden">
          <div
            style={{
              transitionTimingFunction: "cubic-bezier(0.22, 0.68, 0, 1.2)",
            }}
            className={`${toggle ? "translate-x-0" : "translate-x-full"} fixed top-0 right-0 w-72 h-screen bg-white z-40 transform transition-transform duration-300`}
          >
            <div className="flex items-center justify-between p-4 shadow-md">
              <MdOutlineClose
                className="text-gray-400"
                onClick={() => setToggle(false)}
                size={28}
              />

              {/* Logo Section */}
              <Link
                onClick={() => setToggle(false)}
                to={"/"}
                className="flex w-fit items-center gap-2"
              >
                <img className="w-8 md:w-12" src={logo} alt="Logo" />
                <h2 className="text-xl md:text-3xl font-semibold">
                  App{" "}
                  <span className="bg-linear-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                    Ghor
                  </span>
                </h2>
              </Link>
            </div>

            {/* NavLink Here */}
            <ul
              onClick={() => setToggle(false)}
              className="flex flex-col text-xl font-semibold items-left px-4 my-10 gap-5"
            >
              {navLink}
            </ul>

            <div className="px-4">
              <Link
                target="blank"
                to={"https://github.com/shihab-63"}
                className="flex items-center gap-2 bg-linear-to-r from-[#632EE3] to-[#9F62F2]  text-white rounded py-2 px-17 text-lg"
              >
                <FaGithub size={18} />
                Contribute
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Header;
