import Icons from "../elements/Icons";
import {
  faGithub,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      <footer className="footer">
        <a
          href="https://github.com/carlosmrtzodev/portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__credits"
        >
          Designed & Built by Carlos Martínez.{" "}
          <FontAwesomeIcon icon={faCodeBranch} />
        </a>

        <div className="footer__social">
          <Icons
            url="https://github.com/carlosmrtzodev"
            classes="icons__links-footer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </Icons>

          <Icons
            url="https://www.linkedin.com/in/carlosmrtzodev/"
            classes="icons__links-footer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </Icons>

          <Icons
            url="https://twitter.com/carlosmrtzodev"
            classes="icons__links-footer"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </Icons>
        </div>

        {showButton && (
          <div className="footer__top">
            <FontAwesomeIcon
              onClick={scrollToTop}
              icon={faAnglesUp}
              className="footer__top-icon"
            />
          </div>
        )}
      </footer>
    </>
  );
};

export default Footer;
