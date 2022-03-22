import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

const Skills = ({ text }) => {
  return (
    <li className="text">
      <FontAwesomeIcon
        icon={faCaretRight}
        className="about__section-row_container-skills_icon"
      />
      <strong className="about__section-row_container-skills_text">
        {text}
      </strong>
    </li>
  );
};

export { Skills };
