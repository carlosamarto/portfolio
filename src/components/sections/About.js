import React from "react";
import Title from "../elements/Title";
import Skills from "../elements/Skills";
import profile from "../../assets/Profile.jpg";

const About = () => {
  return (
    <>
      <section
        id="about"
        className="flex sm:flex-row flex-col sm:gap-6 gap-12 md:min-h-vh"
      >
        <div className="flex flex-col gap-6">
          <Title number="01." text="About Me" />

          <p className="text-paragraph font-moboto text-text">
            Hello! my name is Carlos, I’m passionate about creating great
            things, I went to study computer engineering for the love of
            computers and that's where I found interest in{" "}
            <span className="text-red">Web Development</span>, more precisely in
            the <span className="text-red">Front End</span>.
          </p>

          <p className="text-paragraph font-moboto text-text">
            I currently work as a Freelancer and I continue to improve and
            learn.
          </p>

          <ul className="grid md:grid-cols-3 grid-cols-2 gap-2">
            <Skills text="HTML" />
            <Skills text="CSS" />
            <Skills text="JavaScript" />
            <Skills text="React.js" />
            <Skills text="Next.js" />
            <Skills text="Tailwind CSS" />
            <Skills text="WordPress" />
          </ul>
        </div>

        <div className="w-full">
          <figure>
            <img
              src={profile}
              alt="Profile"
              className="sm:shadow-red sm:hover:shadow-hover sm:transition-all sm:ease-in-out sm:duration-200"
            />
          </figure>
        </div>
      </section>
    </>
  );
};

export default About;
