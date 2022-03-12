import React from "react";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";

const Icons = () => {
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
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="fixed bottom-6 left-16 flex flex-col gap-2">
        <a
          href="https://github.com/carlosmrtzodev"
          target="_blank"
          rel="noreferrer"
          className="text-subtitle text-light hover:text-hover transition-all ease-in-out duration-300"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>

        <a
          href="https://www.linkedin.com/in/carlosmrtzodev/"
          target="_blank"
          rel="noreferrer"
          className="text-subtitle text-light hover:text-hover transition-all ease-in-out duration-300"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>

        <a
          href="https://twitter.com/carlosmrtzodev"
          target="_blank"
          rel="noreferrer"
          className="text-subtitle text-light hover:text-hover transition-all ease-in-out duration-300"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>

      {showButton && (
        <div className="fixed right-16 bottom-6">
          <FontAwesomeIcon
            onClick={scrollToTop}
            icon={faAnglesUp}
            className="cursor-pointer text-red hover:text-hover text-subtitle animate-bounce hover:animate-none transition-all ease-in-out duration-300"
          />
        </div>
      )}
    </>
  );
};

export default Icons;