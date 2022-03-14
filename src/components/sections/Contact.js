import React from "react";
import Btn from "../elements/Btn";

const Contact = () => {
  return (
    <section
      id="featured"
      className="flex justify-center items-center md:min-h-vh"
    >
      <div className="text-center flex flex-col gap-8 md:w-2/3 w-full">
        <h4 className="lg:text-title text-mobile font-roboto font-bold text-light leading-none">
          <span className="lg:text-mobile text-subtitle text-red">04. </span>Get
          in Touch
        </h4>

        <p className="text-paragraph font-moboto text-text">
          I am currently open to new job opportunities, if you want to contact
          me you can do it through my networks or send me an e-mail with the
          link below.
        </p>

        <Btn
          url="mailto:carlosmrtzodev@gmail.com"
          text="Let's Talk."
          classes="px-12 py-4"
        />
      </div>
    </section>
  );
};

export default Contact;
