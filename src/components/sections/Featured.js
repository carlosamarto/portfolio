import { TitleLine } from "../elements/TitleLine";
import { FeaturedContent } from "../elements/FeaturedContent";

const Featured = () => {
  return (
    <>
      <section id='featured' className='section featured'>
        <TitleLine number='02.' text='Featured' />

        <FeaturedContent
          image='/pokedex.png'
          title='Pokédex App'
          description='Pokédex App in Next.js, Tailwind CSS and PokéAPI REST.'
          codes={["React.js", "Next.js", "Tailwind CSS"]}
          link='https://pokedex-app-rouge.vercel.app/'
          github='https://github.com/carlosmrtzodev/pokedex-app'
          alt={false}
        />
      </section>
    </>
  );
};

export { Featured };
