import { Icons } from "./Icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";

const FeaturedContent = ({
  image,
  title,
  description,
  codes,
  link,
  github,
  alt,
}) => {
  return (
    <>
      <div className="featured__content">
        <figure
          className={`featured__content-figure ${
            alt
              ? `featured__content-figure_right`
              : `featured__content-figure_left`
          }`}
        >
          <img src={image} alt={title} />
        </figure>

        <div
          className={`featured__content-description ${
            alt
              ? `featured__content-description_left`
              : `featured__content-description_right`
          }`}
        >
          <ul className="featured__content-description_titles">
            <li>
              <h4 className="subtitle">Featured Project</h4>
            </li>

            <li>
              <h4 className="subtitle">{title}</h4>
            </li>
          </ul>

          <p className="featured__content-description_text">{description}</p>

          <div className="featured__content-description_skills">
            <ul className="featured__content-description_skills-container">
              {codes.map((code) => (
                <li
                  key={code}
                  className="featured__content-description_skills-container_text"
                >
                  <strong className="strong__light">{code}</strong>
                </li>
              ))}
            </ul>

            <ul className="featured__content-description_links">
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

export { FeaturedContent };
