import Title from "../elements/Title";
import Content from "../elements/Content";
import pokedex from "../../assets/pokedex.png";
import gpt3 from "../../assets/gpt-3.png";

const Featured = () => {
  return (
    <>
      <section
        id="featured"
        className="flex flex-col gap-12 xxl:min-h-full md:min-h-vh"
      >
        <Title number="02." text="Featured" />

        <Content
          image={pokedex}
          title="Pokedex App"
          description="Pokédex App in Next.js, Tailwind CSS and PokéAPI REST."
          codes={["React.js", "Next.js", "Tailwind CSS"]}
          link="https://pokedex-app-rouge.vercel.app/"
          github="https://github.com/carlosmrtzodev/pokedex-app"
          alt={false}
        />

        <Content
          image={gpt3}
          title="GPT-3"
          description="Fully Responsive Modern UI/UX Website in React.js."
          codes={["React.js", "JavaScript", "CSS"]}
          link="https://responsive-website-seven.vercel.app/"
          github="https://github.com/carlosmrtzodev/responsive-website"
          alt={true}
        />
      </section>
    </>
  );
};

export default Featured;
