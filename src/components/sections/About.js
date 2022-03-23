import { motion } from "framer-motion";
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
      <motion.section
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        id="about"
        className="section about"
      >
        <TitleLine number="01." text="About" />

        <div className="about__section-row">
          <div className="about__section-row_container">
            <p className="text">
              Hello! My name is Carlos, I’m passionate about creating things
              with a great style, I studied{" "}
              <strong className="strong">Software Engineering</strong> because
              of my curiosity in computers and there I found the interest in{" "}
              <strong className="strong">Web Development</strong>, more
              precisely in the <strong className="strong">Front End</strong>{" "}
              area.
            </p>

            <ul className="about__section-row_container-skills">
              {skills.map((skill) => (
                <Skills key={skill} text={skill} />
              ))}
            </ul>
          </div>

          <div className="about__section-row_image">
            <figure>
              <img src="/profile.svg" alt="Profile" />
            </figure>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export { About };
