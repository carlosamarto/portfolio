import React from "react";
import Card from "../elements/Card";
import Title from "../elements/Title";

const Projects = () => {
  return (
    <>
      <section
        id="projects"
        className="flex flex-col gap-12 xxl:min-h-full md:min-h-vh"
      >
        <Title number="03." text="Projects" />

        <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12">
          <Card
            link="https://pomodoro-app-sage.vercel.app/"
            github="https://github.com/carlosmrtzodev/Pomodoro-app"
            title="Pomodoro App"
            description="Responsive Pomodoro App in React.js and Styled Components."
            codes={["React.js", "JavaScript", "CSS"]}
          />

          <Card
            link="https://poke-kappa-three.vercel.app/"
            github="https://github.com/carlosmrtzodev/poke"
            title="Poké App"
            description="Simple Poké App in Next.js, Styled Components and PokéAPI REST."
            codes={["Next.js", "React.js", "JavaScript"]}
          />

          <Card
            link="https://compound-interest-one.vercel.app/"
            github="https://github.com/carlosmrtzodev/compound-interest"
            title="Compound Interest App"
            description="Simple Compound Interest App in React.js with Formik Forms."
            codes={["React.js", "JavaScript", "CSS"]}
          />

          <Card
            link="https://simple-user-manager.vercel.app/"
            github="https://github.com/carlosmrtzodev/simple-user-manager"
            title="User Manager App"
            description="Simple User Manager App in React.js."
            codes={["React.js", "JavaScript", "CSS"]}
          />

          <Card
            link="https://cart-app-ten.vercel.app/"
            github="https://github.com/carlosmrtzodev/cart-app"
            title="Cart App"
            description="Simple Cart App in React.js."
            codes={["React.js", "JavaScript", "CSS"]}
          />
        </div>
      </section>
    </>
  );
};

export default Projects;
