import React from "react";
import Icons from "../elements/Icons";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faAnglesUp, faCodeBranch } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <>
      <footer class="flex lg:flex-row flex-col justify-center items-center gap-2 h-24 mt-12">
        <a
          href="https://github.com/carlosmrtzodev/portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="text-paragraph font-moboto text-center text-text hover:text-hover transition-all ease-in-out duration-200"
        >
          Designed & Built by Carlos Martínez.{" "}
          <FontAwesomeIcon icon={faCodeBranch} />
        </a>

        <div className="lg:fixed lg:bottom-6 lg:left-8 flex lg:flex-col flex-row lg:justify-start justify-center lg:gap-2 gap-4">
          <Icons
            url="https://github.com/carlosmrtzodev"
            classes="text-subtitle text-light hover:text-hover"
          >
            <FontAwesomeIcon icon={faGithub} />
          </Icons>

          <Icons
            url="https://www.linkedin.com/in/carlosmrtzodev/"
            classes="text-subtitle text-light hover:text-hover"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </Icons>

          <Icons
            url="https://twitter.com/carlosmrtzodev"
            classes="text-subtitle text-light hover:text-hover"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </Icons>
        </div>

        {showButton && (
          <div className="fixed bottom-6 md:right-8 right-2.5">
            <FontAwesomeIcon
              onClick={scrollToTop}
              icon={faAnglesUp}
              className="cursor-pointer text-subtitle text-red hover:text-hover animate-bounce hover:animate-none transition-all ease-in-out duration-200"
            />
          </div>
        )}
      </footer>
    </>
  );
};

export default Footer;
