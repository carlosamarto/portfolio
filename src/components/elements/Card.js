import React from "react";
import Icons from "../elements/Icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink, faFolder } from "@fortawesome/free-solid-svg-icons";

const Card = ({ link, github, title, description, codes }) => {
  return (
    <>
      <div className="flex flex-col justify-between gap-6 border border-red p-4">
        <ul className="flex justify-between items-center">
          <li className="text-subtitle text-red">
            <FontAwesomeIcon icon={faFolder} />
          </li>

          <li className="flex gap-4">
            <Icons
              url={github}
              classes="text-subtitle text-red hover:text-hover"
            >
              <FontAwesomeIcon icon={faGithub} />
            </Icons>

            <Icons url={link} classes="text-subtitle text-red hover:text-hover">
              <FontAwesomeIcon icon={faExternalLink} />
            </Icons>
          </li>
        </ul>

        <h4 className="text-paragraph font-roboto font-bold text-light">
          {title}
        </h4>

        <p className="text-small font-moboto text-text">{description}</p>

        <ul className="flex items-center gap-2">
          {codes.map((code) => (
            <li className="text-small font-moboto text-text">
              <strong>{code}</strong>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Card;
