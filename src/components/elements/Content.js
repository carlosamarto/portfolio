import React from "react";
import Icons from "./Icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";

const Content = ({ image, title, description, codes, link, github }) => {
  return (
    <>
      <div className="relative">
        <figure className="lg:w-2/3">
          <img src={image} alt="Featured 1" />
        </figure>

        <div className="lg:absolute lg:bottom-1/3 lg:right-0 flex flex-col gap-6 bg-red lg:hover:bg-hover lg:transition-all lg:ease-in-out lg:duration-200 lg:drop-shadow-2xl lg:w-2/4 px-4 py-2">
          <ul className="flex justify-between items-center">
            <li>
              <h4 className="text-paragraph font-roboto font-bold text-light">
                Featured Project
              </h4>
            </li>

            <li>
              <h4 className="text-paragraph font-roboto font-bold text-light">
                {title}
              </h4>
            </li>
          </ul>

          <p className="text-small font-moboto text-light">{description}</p>

          <div className="flex sm:flex-row flex-col justify-between sm:items-center items-end gap-2">
            <ul className="flex gap-2">
              {codes.map((code) => (
                <li key={code} className="text-small font-roboto text-light">
                  {code}
                </li>
              ))}
            </ul>

            <ul className="flex gap-4">
              <li className="text-paragraph text-light">
                <Icons url={link} type={true}>
                  <FontAwesomeIcon icon={faExternalLink} />
                </Icons>
              </li>

              <li className="text-paragraph text-light">
                <Icons url={github} type={true}>
                  <FontAwesomeIcon icon={faGithub} />
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
