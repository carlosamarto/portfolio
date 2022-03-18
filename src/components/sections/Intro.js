import Btn from "../elements/Btn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Intro = () => {
  return (
    <>
      <section id="intro" className="section__intro">
        <h1>Hello! I’m</h1>

        <h2>Carlos Martínez.</h2>

        <h2 className="title__alt-color">My goal is to create cool things.</h2>

        <p className="p__alt-width">
          I’m a <strong>Front End Developer</strong> specialized in creating
          cool and unique style websites and interfaces. Currently, I’m focused
          on being better at what I do and continuing to learn more.
        </p>

        <Btn
          text="Let’s Talk"
          url="#contact"
          target="_self"
          rel="author"
          classes="py-3 px-12"
          icon={<FontAwesomeIcon icon={faArrowRight} className="btn__icon" />}
        />
      </section>
    </>
  );
};

export default Intro;
