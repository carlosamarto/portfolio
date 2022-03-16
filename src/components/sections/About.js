import Title from "../elements/Title";
import Skills from "../elements/Skills";
import profile from "../../assets/Profile.jpg";

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
      <section
        id="about"
        className="flex flex-col gap-12 xxl:min-h-full md:min-h-vh"
      >
        <Title number="01." text="About" />

        <div className="flex sm:flex-row flex-col gap-12">
          <div className="flex flex-col gap-12">
            <p className="text-paragraph font-moboto text-text">
              Hello! My name is Carlos, I’m passionate about creating things
              with a great style, I studied{" "}
              <strong className="text-red font-normal">
                Software Engineering
              </strong>{" "}
              because of my curiosity in computers and there I found the
              interest in{" "}
              <strong className="text-red font-normal">Web Development</strong>,
              more precisely in the{" "}
              <strong className="text-red font-normal">Front End</strong> area.
            </p>

            <ul className="grid md:grid-cols-3 grid-cols-2 gap-4">
              {skills.map((skill) => (
                <Skills key={skill} text={skill} />
              ))}
            </ul>
          </div>

          <div className="w-full">
            <a
              href="https://www.linkedin.com/in/carlosmrtzodev/"
              target="_blank"
              rel="noreferrer"
            >
              <figure>
                <img
                  src={profile}
                  alt="Profile"
                  className="xs:shadow-red xs:hover:shadow-hover xs:transition-all xs:ease-in-out xs:duration-200"
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
