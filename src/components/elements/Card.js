import { Icons } from "../elements/Icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink, faFolder } from "@fortawesome/free-solid-svg-icons";

const Card = ({ link, github, title, description, codes }) => {
  return (
    <>
      <div className="projects__card">
        <ul className="projects__card-icons">
          <li className="projects__card-icons_folder">
            <FontAwesomeIcon icon={faFolder} />
          </li>

          <li className="projects__card-icons_container">
            {github === "null" ? null : (
              <Icons url={github} classes="icons__links-projects">
                <FontAwesomeIcon icon={faGithub} />
              </Icons>
            )}

            <Icons url={link} classes="icons__links-projects">
              <FontAwesomeIcon icon={faExternalLink} />
            </Icons>
          </li>
        </ul>

        <h4 className="projects__card-title">{title}</h4>

        <p className="projects__card-text">{description}</p>

        <ul className="projects__card-skills">
          {codes.map((code) => (
            <li key={code} className="projects__card-skills_text">
              <strong className="strong__light">{code}</strong>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export { Card };
