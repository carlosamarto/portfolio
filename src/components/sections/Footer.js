import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaAngleDoubleUp,
  FaCodeBranch,
} from "react-icons/fa";
import { Icons } from "../elements/Icons";
import { UseScroll } from "../../hooks/UseScroll";
import { AnimatePresence, motion } from "framer-motion";

const Footer = () => {
  const { showButton, ScrollToTop } = UseScroll();

  return (
    <>
      <footer className='footer'>
        <a
          href='https://github.com/carlosmrtzodev/portfolio'
          target='_blank'
          rel='noopener noreferrer'
          className='footer__credits'>
          Designed & Built by Carlos Martínez.{" "}
          <FaCodeBranch className='footer__credits-icon' />
        </a>

        <div className='footer__social'>
          <Icons
            url='https://github.com/carlosmrtzodev'
            classes='icons__footer'>
            <FaGithub />
          </Icons>

          <Icons
            url='https://www.linkedin.com/in/carlosmrtzodev/'
            classes='icons__footer'>
            <FaLinkedinIn />
          </Icons>

          <Icons
            url='https://twitter.com/carlosmrtzo'
            classes='icons__footer'>
            <FaTwitter />
          </Icons>
        </div>

        <AnimatePresence>
          {showButton && (
            <motion.div
              animate={{ opacity: 1 }}
              transition={{ ease: "easeOut", duration: 1 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              className='footer__top'>
              <FaAngleDoubleUp
                onClick={ScrollToTop}
                className='footer__top-icon'
              />
            </motion.div>
          )}
        </AnimatePresence>
      </footer>
    </>
  );
};

export { Footer };
