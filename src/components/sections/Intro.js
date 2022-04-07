import { motion } from "framer-motion";
import { Button } from "../elements/Button";
import { FaArrowRight } from "react-icons/fa";

const Intro = () => {
  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: "easeOut" }}
        id='intro'
        className='section intro'>
        <h1 className='intro__title'>Hello! I’m</h1>

        <h2 className='title'>Carlos Martínez.</h2>

        <h2 className='title__gray'>My goal is to create cool things.</h2>

        <p className='text text__width'>
          I’m a <strong className='strong'>Front End Developer</strong>{" "}
          specialized in creating cool and unique style websites and interfaces.
          Currently, I’m focused on being better at what I do and continuing to
          learn more.
        </p>

        <Button
          text='Let’s Talk'
          url='#contact'
          target='_self'
          rel='author'
          classes='py-3 px-12'
          icon={<FaArrowRight />}
        />
      </motion.section>
    </>
  );
};

export { Intro };
