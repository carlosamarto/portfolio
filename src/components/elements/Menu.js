import Btn from "./Btn";
import Links from "./Links";
import { faScroll } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Menu = () => {
  return (
    <>
      <Links url="#about" number="01." text="About" />
      <Links url="#featured" number="02." text="Featured" />
      <Links url="#projects" number="03." text="Projects" />
      <Links url="#contact" number="04." text="Contact" />

      <Btn
        text="Resume"
        url="/CV EN.pdf"
        target="_blank"
        rel="noopener noreferrer"
        classes="btn__menu"
        icon={<FontAwesomeIcon icon={faScroll} className="btn__icon" />}
      />
    </>
  );
};

export default Menu;
