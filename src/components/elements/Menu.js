import React from "react";
import Links from "./Links";

const Menu = () => {
  return (
    <>
      <Links url="#about" number="01." text="About" />
      <Links url="#featured" number="02." text="Featured" />
      <Links url="#work" number="03." text="Projects" />
      <Links url="#contact" number="04." text="Contact" />
    </>
  );
};

export default Menu;
