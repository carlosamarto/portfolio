import React from "react";
import Title from "../elements/Title";
import Content from "../elements/Content";
import features1 from "../../assets/Featured-1.png";
import features2 from "../../assets/Featured-2.png";

const Featured = () => {
  return (
    <>
      <section id="featured" className="flex flex-col gap-12 md:min-h-vh">
        <Title number="02." text="Featured" />

        <Content
          image={features1}
          title="Pokedex App"
          description="Improved version of my Poké App in Next.js, Tailwind CSS and PokéAPI REST."
          codes={["React.js", "Next.js", "Tailwind CSS"]}
          link="https://pokedex-app-rouge.vercel.app/"
          github="https://github.com/carlosmrtzodev/pokedex-app"
        />

        <Content
          image={features2}
          title="GPT-3"
          description="Fully Responsive Modern UI/UX Website in React.js."
          codes={["React.js", "JavaScript", "CSS"]}
          link="https://responsive-website-seven.vercel.app/"
          github="https://github.com/carlosmrtzodev/responsive-website"
        />
      </section>
    </>
  );
};

export default Featured;
