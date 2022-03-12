import React from "react";
import Btn from "../elements/Btn";

const Intro = () => {
  return (
    <>
      <section id="intro" className="h-initial flex flex-col justify-center">
        <div>
          <h1 className="text-title font-roboto font-bold text-light leading-none">
            Carlos Martínez.
          </h1>

          <h2 className="text-title font-roboto font-bold text-text">
            I build things with a cool style.
          </h2>

          <p className="text-paragraph font-rbtmono text-text w-2/3 mb-4">
            I’m a <span className="text-red">Front End Developer</span>{" "}
            specialized in creating websites and infarces with a unique and
            great style. Currently, I’m focused on being better at what I do and
            continuing to improve.
          </p>

          <Btn text="Contact Me" url="#contact" />
        </div>
      </section>
    </>
  );
};

export default Intro;
