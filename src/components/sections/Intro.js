import React from "react";
import Btn from "../elements/Btn";

const Intro = () => {
  return (
    <>
      <section
        id="intro"
        className="flex flex-col justify-start gap-4 h-initial"
      >
        <p className="text-parahraph font-rbtmono text-red">
          Hello! my name is
        </p>

        <h1 className="md:text-title text-mobile font-roboto font-bold text-light leading-none">
          Carlos Martínez.
        </h1>

        <h2 className="md:text-title text-mobile font-roboto font-bold text-text leading-none">
          I create things with a cool style.
        </h2>

        <p className="text-paragraph font-rbtmono text-text md:w-2/3 w-full">
          I’m a <span className="text-red">Front End Developer</span>{" "}
          specialized in creating websites and infarces with a unique and great
          style. Currently, I’m focused on being better at what I do and
          continuing to improve.
        </p>

        <div>
          <Btn text="Contact Me" url="#contact" />
        </div>
      </section>
    </>
  );
};

export default Intro;
