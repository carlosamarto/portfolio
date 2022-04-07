import { Icons } from "./Icons";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

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
      <div className='featured__content'>
        <figure
          className={`featured__content-preview ${
            alt
              ? `featured__content-preview_right`
              : `featured__content-preview_left`
          }`}>
          <img
            src={image}
            alt={title}
            className='featured__content-preview_image'
          />
        </figure>

        <div
          className={`featured__content-description ${
            alt
              ? `featured__content-description_left`
              : `featured__content-description_right`
          }`}>
          <ul className='featured__content-description_titles'>
            <li className='featured__content-description_titles-item'>
              <h4 className='subtitle'>Featured Project</h4>
            </li>

            <li className='featured__content-description_titles-item'>
              <h4 className='subtitle'>{title}</h4>
            </li>
          </ul>

          <p className='featured__content-description_text'>{description}</p>

          <div className='featured__content-description_skills'>
            <ul className='featured__content-description_skills-list'>
              {codes.map((code) => (
                <li
                  key={code}
                  className='featured__content-description_skills-list_text'>
                  <strong className='strong__light'>{code}</strong>
                </li>
              ))}
            </ul>

            <ul className='featured__content-description_links'>
              <li className='featured__content-description_links-container'>
                <Icons url={github} classes='icons__featured'>
                  <FaGithub className='featured__content-description_links-container_icons' />
                </Icons>
              </li>

              <li className='featured__content-description_links-container'>
                <Icons url={link} classes='icons__featured'>
                  <FaExternalLinkAlt className='featured__content-description_links-container_icons' />
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
