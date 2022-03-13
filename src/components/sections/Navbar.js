import React from "react";
import { useState } from "react";
import Menu from "../elements/Menu";
import logo from "../../assets/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <nav className="flex lg:justify-end justify-between items-center h-24 lg:mb-0 mb-8">
        <div className="lg:fixed block top-6 left-8">
          <a href="/">
            <figure>
              <img src={logo} alt="Logo" className="w-14 h-14" />
            </figure>
          </a>
        </div>

        <ul className="md:flex hidden items-center gap-8">
          <Menu />
        </ul>

        <FontAwesomeIcon
          onClick={() => setToggleMenu(true)}
          icon={faBars}
          className="md:hidden cursor-pointer text-subtitle text-red hover:text-hover transition-all ease-in-out duration-200"
        />

        <div
          className={`fixed top-0 right-0 bg-glass drop-shadow-2xl transition-all ease-in-out duration-200  ${
            toggleMenu ? `w-2/4` : `w-0`
          } h-screen z-10`}
        >
          <div
            className={`${
              toggleMenu
                ? `opacity-100 transition-all ease-in delay-200 duration-200`
                : `opacity-0`
            }`}
          >
            <div className="block text-right">
              <FontAwesomeIcon
                onClick={() => setToggleMenu(false)}
                icon={faXmark}
                className="text-subtitle cursor-pointer text-red hover:text-hover transition-all ease-in-out duration-200 m-4"
              />
            </div>

            <ul className="flex flex-col items-center gap-8">
              <Menu />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
