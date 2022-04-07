import { motion } from "framer-motion";
import { Button } from "../elements/Button";
import { FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 2, ease: "easeOut" }}
      id='contact'
      className='section contact'>
      <div className='contact__container'>
        <h3 className='contact__container-title'>
          <strong className='contact__container-title_number'>04. </strong>
          Get in Touch
        </h3>

        <p className='text'>
          I’m currently open to new job opportunities, if you want to contact me
          you can do it through my <strong className='strong'>Networks</strong>{" "}
          or send me an <strong className='strong'>E-mail</strong> to the
          following link.
        </p>

        <Button
          url='mailto:carlosmrtzodev@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
          text="Let's Talk."
          classes='button__primary-contact'
          icon={<FaEnvelope />}
        />
      </div>
    </motion.section>
  );
};

export { Contact };
