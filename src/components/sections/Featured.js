import { motion } from "framer-motion";
import { Title } from "../elements/Title";
import { Content } from "../elements/Content";

const Featured = () => {
  return (
    <>
      <motion.section
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        id="featured"
        className="section featured"
      >
        <Title number="02." text="Featured" />

        <Content
          image="/pokedex.png"
          title="Pokedex App"
          description="Pokédex App in Next.js, Tailwind CSS and PokéAPI REST."
          codes={["React.js", "Next.js", "Tailwind CSS"]}
          link="https://pokedex-app-rouge.vercel.app/"
          github="https://github.com/carlosmrtzodev/pokedex-app"
          alt={false}
        />

        <Content
          image="/gpt-3.png"
          title="GPT-3"
          description="Fully Responsive Modern UI/UX Website in React.js with React Router."
          codes={["React.js", "JavaScript", "CSS"]}
          link="https://responsive-website-seven.vercel.app/"
          github="https://github.com/carlosmrtzodev/responsive-website"
          alt={true}
        />
      </motion.section>
    </>
  );
};

export { Featured };
