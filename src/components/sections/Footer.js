import React from "react";
import Icons from "../elements/Icons";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
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
      <footer class="flex lg:flex-row flex-col justify-center items-center gap-2 h-24">
        <a
          href="https://github.com/carlosmrtzodev/portfolio"
          target="_blank"
          rel="noreferrer"
          className="text-paragraph font-rbtmono text-center text-red hover:text-hover transition-all ease-in-out duration-300"
        >
          Created by Carlos Martínez.
        </a>

        <div className="lg:fixed lg:bottom-6 lg:left-8 flex lg:flex-col flex-row lg:gap-2 gap-6 lg:justify-start justify-center">
          <Icons url="https://github.com/carlosmrtzodev">
            <FontAwesomeIcon icon={faGithub} />
          </Icons>

          <Icons url="https://www.linkedin.com/in/carlosmrtzodev/">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </Icons>

          <Icons url="https://twitter.com/carlosmrtzodev">
            <FontAwesomeIcon icon={faTwitter} />
          </Icons>
        </div>

        {showButton && (
          <div className="fixed bottom-6 right-8">
            <FontAwesomeIcon
              onClick={scrollToTop}
              icon={faAnglesUp}
              className="cursor-pointer text-subtitle text-red hover:text-hover animate-bounce hover:animate-none transition-all ease-in-out duration-300"
            />
          </div>
        )}
      </footer>
    </>
  );
};

export default Footer;
