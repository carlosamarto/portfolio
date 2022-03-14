import React from "react";
import Btn from "../elements/Btn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Intro = () => {
  return (
    <>
      <section
        id="intro"
        className="flex flex-col gap-6 xxl:min-h-full md:min-h-vh"
      >
        <h1 className="text-parahraph font-moboto text-red">Hello! I’m</h1>

        <h2 className="lg:text-title text-mobile font-roboto font-bold text-light leading-none">
          Carlos Martínez.
        </h2>

        <h2 className="lg:text-title text-mobile font-roboto font-bold text-text leading-none">
          My goal is to create cool things.
        </h2>

        <p className="text-paragraph font-moboto text-text md:w-2/3 w-full">
          I’m a{" "}
          <strong className="text-red font-normal">Front End Developer</strong>{" "}
          specialized in creating cool and unique style websites and interfaces.
          Currently, I’m focused on being better at what I do and continuing to
          learn more.
        </p>

        <Btn
          text="Let’s Talk"
          url="#contact"
          target="_self"
          rel="author"
          classes="py-3 px-12"
          icon={<FontAwesomeIcon icon={faArrowRight} className="ml-2" />}
        />
      </section>
    </>
  );
};

export default Intro;
