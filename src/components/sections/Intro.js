import { Btn } from "../elements/Btn";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Intro = () => {
  return (
    <>
      <motion.section
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        id="intro"
        className="section intro"
      >
        <h1 className="intro__title">Hello! I’m</h1>

        <h2 className="title">Carlos Martínez.</h2>

        <h2 className="title__gray">My goal is to create cool things.</h2>

        <p className="text text__width">
          I’m a <strong className="strong">Front End Developer</strong>{" "}
          specialized in creating cool and unique style websites and interfaces.
          Currently, I’m focused on being better at what I do and continuing to
          learn more.
        </p>

        <Btn
          text="Let’s Talk"
          url="#contact"
          target="_self"
          rel="author"
          classes="py-3 px-12"
          icon={<FontAwesomeIcon icon={faArrowRight} className="btn__icon" />}
        />
      </motion.section>
    </>
  );
};

export { Intro };
