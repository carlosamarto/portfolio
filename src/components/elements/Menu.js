import { Button } from "./Button";
import { NavLinks } from "./NavLinks";
import { faScroll } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Menu = () => {
  return (
    <>
      <NavLinks url="#about" number="01." text="About" />
      <NavLinks url="#featured" number="02." text="Featured" />
      <NavLinks url="#projects" number="03." text="Projects" />
      <NavLinks url="#contact" number="04." text="Contact" />

      <Button
        text="Resume"
        url="/CV EN.pdf"
        target="_blank"
        rel="noopener noreferrer"
        classes="button__menu"
        icon={<FontAwesomeIcon icon={faScroll} className="button__icon" />}
      />
    </>
  );
};

export { Menu };
