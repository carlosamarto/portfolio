import React from "react";
import Links from "../elements/Links";
import Logo from "../elements/Logo";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-end items-center h-24">
        <Logo />

        <ul className="flex gap-8">
          <Links url="#about" number="01." text="About" />
          <Links url="#featured" number="02." text="Featured" />
          <Links url="#work" number="03." text="Work" />
          <Links url="#contact" number="04." text="Contact" />
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
