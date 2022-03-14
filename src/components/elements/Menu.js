import Btn from "./Btn";
import React from "react";
import Links from "./Links";
import resume from "../../assets/resume/CV EN.pdf";
import { faScroll } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Menu = () => {
  return (
    <>
      <Links url="#about" number="01." text="About" />
      <Links url="#featured" number="02." text="Featured" />
      <Links url="#projects" number="03." text="Projects" />
      <Links url="#contact" number="04." text="Contact" />
      <Btn
        text="Resume"
        url={resume}
        target="_blank"
        rel="noreferrer"
        classes="py-2 px-4"
        icon={<FontAwesomeIcon icon={faScroll} className="ml-2" />}
      />
    </>
  );
};

export default Menu;
