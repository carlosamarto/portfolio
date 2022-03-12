import React from "react";
import Links from "./Links";

const Menu = () => {
  return (
    <>
      <Links url="#about" number="01." text="About Me" />
      <Links url="#featured" number="02." text="Featured" />
      <Links url="#work" number="03." text="Projects" />
      <Links url="#contact" number="04." text="Get in Touch" />
    </>
  );
};

export default Menu;
