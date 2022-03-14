import React from "react";
import Title from "../elements/Title";
import Content from "../elements/Content";
import features1 from "../../assets/Featured-1.png";
import features2 from "../../assets/Featured-2.png";

const Featured = () => {
  return (
    <>
      <section
        id="featured"
        className="relative flex flex-col gap-8 md:min-h-vh"
      >
        <Title number="02." text="Featured" />

        <div className="flex flex-col lg:gap-32 gap-12">
          <Content
            image={features1}
            title="Pokedex App"
            description="This is my Pokédex App With Next.js, Tailwind CSS and PokéAPI REST."
            codes={["React.js", "Next.js", "Tailwind CSS"]}
            link="https://pokedex-app-rouge.vercel.app/"
            github="https://github.com/carlosmrtzodev/pokedex-app"
          />

          <Content
            image={features2}
            title="GPT-3"
            description="Responsive and Modern Website practice from JavaScript Mastery Youtube Channel."
            codes={["React.js", "JavaScript", "CSS"]}
            link="https://responsive-website-seven.vercel.app/"
            github="https://github.com/carlosmrtzodev/responsive-website"
          />
        </div>
      </section>
    </>
  );
};

export default Featured;
