import Icons from "./Icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";

const Content = ({ image, title, description, codes, link, github, alt }) => {
  return (
    <>
      <div className="featured__container">
        <figure
          className={`featured__container-figure ${
            alt
              ? `featured__container-figure_right`
              : `featured__container-figure_left`
          }`}
        >
          <img src={image} alt={title} />
        </figure>

        <div
          className={`featured__container-description ${
            alt
              ? `featured__container-description_left`
              : `featured__container-description_right`
          }`}
        >
          <ul className="featured__container-description_titles">
            <li>
              <h4>Featured Project</h4>
            </li>

            <li>
              <h4>{title}</h4>
            </li>
          </ul>

          <p className="featured__container-description_text">{description}</p>

          <div className="featured__container-skills">
            <ul className="featured__container-skills_container">
              {codes.map((code) => (
                <li
                  key={code}
                  className="featured__container-skills_container-text"
                >
                  <strong className="strong__alt-color_light">{code}</strong>
                </li>
              ))}
            </ul>

            <ul className="featured__container-links">
              <li>
                <Icons url={github} classes="icons__links-featured">
                  <FontAwesomeIcon icon={faGithub} />
                </Icons>
              </li>

              <li>
                <Icons url={link} classes="icons__links-featured">
                  <FontAwesomeIcon icon={faExternalLink} />
                </Icons>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
