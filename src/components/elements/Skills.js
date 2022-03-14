import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

const Skills = ({ text }) => {
  return (
    <li className="text-paragraph font-moboto text-text">
      <FontAwesomeIcon icon={faCaretRight} className="text-red mr-2" />
      <strong>{text}</strong>
    </li>
  );
};

export default Skills;
