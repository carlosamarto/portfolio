import { Icons } from "../elements/Icons";
import { FaGithub, FaExternalLinkAlt, FaFolder } from "react-icons/fa";

const Card = ({ link, github, title, description, codes }) => {
  return (
    <>
      <div className='projects__card'>
        <ul className='projects__card-icons'>
          <li className='projects__card-icons_folder'>
            <FaFolder />
          </li>

          <li className='projects__card-icons_container'>
            {github ? (
              <Icons url={github} classes='icons__projects'>
                <FaGithub />
              </Icons>
            ) : null}

            <Icons url={link} classes='icons__projects'>
              <FaExternalLinkAlt />
            </Icons>
          </li>
        </ul>

        <h4 className='projects__card-title'>{title}</h4>

        <p className='projects__card-text'>{description}</p>

        <ul className='projects__card-skills'>
          {codes.map((code) => (
            <li key={code} className='projects__card-skills_text'>
              <strong className='strong__light'>{code}</strong>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export { Card };
