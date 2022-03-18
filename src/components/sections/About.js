import Title from "../elements/Title";
import Skills from "../elements/Skills";

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
      <section id="about" className="section__about">
        <Title number="01." text="About" />

        <div className="about__section-row">
          <div className="about__section-row_container">
            <p>
              Hello! My name is Carlos, I’m passionate about creating things
              with a great style, I studied{" "}
              <strong>Software Engineering</strong> because of my curiosity in
              computers and there I found the interest in{" "}
              <strong>Web Development</strong>, more precisely in the{" "}
              <strong>Front End</strong> area.
            </p>

            <ul className="about__skills">
              {skills.map((skill) => (
                <Skills key={skill} text={skill} />
              ))}
            </ul>
          </div>

          <div className="about__image">
            <a
              href="https://www.linkedin.com/in/carlosmrtzodev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <figure>
                <img
                  src="/profile.jpg"
                  alt="Profile"
                  className="about__image-shadow"
                />
              </figure>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
