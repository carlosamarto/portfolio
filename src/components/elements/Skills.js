import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

const Skills = ({ text }) => {
  return (
    <li>
      <FontAwesomeIcon icon={faCaretRight} className="about__skills-icon" />
      <strong className="strong__alt-color_text">{text}</strong>
    </li>
  );
};

export default Skills;
