import { Skills } from "../elements/Skills";
import { TitleLine } from "../elements/TitleLine";

const About = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "WordPress",
  ];

  return (
    <>
      <section id='about' className='section about'>
        <TitleLine number='01.' text='About' />

        <div className='about__container'>
          <div className='about__container-row'>
            <p className='text'>
              Hello! My name is Carlos, I’m passionate about creating things
              with a great style, I studied{" "}
              <strong className='strong'>Software Engineering</strong> because
              of my curiosity in computers and there I found the interest in{" "}
              <strong className='strong'>Web Development</strong>, more
              precisely in the <strong className='strong'>Front End</strong>{" "}
              area.
            </p>

            <ul className='about__container-row_skills'>
              {skills.map((skill) => (
                <Skills key={skill} text={skill} />
              ))}
            </ul>
          </div>

          <figure className='about__container-profile'>
            <img
              src='/Profile.jpg'
              alt='Profile'
              className='about__container-profile_image'
            />
          </figure>
        </div>
      </section>
    </>
  );
};

export { About };
