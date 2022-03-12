import React from "react";
import { useState } from "react";
import Menu from "../elements/Menu";
import Logo from "../elements/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <nav className="flex lg:justify-end justify-between items-center h-24">
        <Logo />

        <ul className="md:flex hidden gap-8">
          <Menu />
        </ul>

        <FontAwesomeIcon
          onClick={() => setToggleMenu(true)}
          icon={faBars}
          className="cursor-pointer text-red hover:text-hover text-subtitle transition-all ease-in-out duration-300 md:hidden"
        />

        <div
          className={`bg-dark drop-shadow-2xl transition-all ease-in-out duration-300 fixed top-0 right-0 ${
            toggleMenu ? `w-2/4` : `w-0`
          } h-screen`}
        >
          <div
            className={`${
              toggleMenu
                ? `opacity-100 transition-all ease-in delay-150 duration-300`
                : `opacity-0`
            }`}
          >
            <div className="block text-right">
              <FontAwesomeIcon
                onClick={() => setToggleMenu(false)}
                icon={faXmark}
                className="cursor-pointer text-red hover:text-hover text-subtitle transition-all ease-in-out duration-300 m-2"
              />
            </div>

            <ul className="flex flex-col gap-8 p-8">
              <Menu />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
