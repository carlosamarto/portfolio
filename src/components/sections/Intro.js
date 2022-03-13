import React from "react";
import Btn from "../elements/Btn";
import Section from "../Container/Section";

const Intro = () => {
  return (
    <>
      <Section id="intro" type="flex-col gap-6">
        <h1 className="text-parahraph font-moboto text-red">Hello! I’m</h1>

        <h2 className="lg:text-title text-mobile font-roboto font-bold text-light leading-none">
          Carlos Martínez.
        </h2>

        <h2 className="lg:text-title text-mobile font-roboto font-bold text-text leading-none">
          My goal is to create cool things.
        </h2>

        <p className="text-paragraph font-moboto text-text md:w-2/3 w-full">
          I’m a <span className="text-red">Front End Developer</span>{" "}
          specialized in creating websites and infarces with a unique and great
          style. Currently, I’m focused on being better at what I do and
          continuing to improve.
        </p>

        <div>
          <Btn text="Contact Me" url="#contact" />
        </div>
      </Section>
    </>
  );
};

export default Intro;
