import { useState } from "react";
import { motion } from "framer-motion";
import { Menu } from "../elements/Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <nav className="navbar">
        <motion.div
          className="navbar__logo"
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          initial={{ opacity: 0 }}
        >
          <a href="/">
            <figure>
              <img src="/Logo.svg" alt="Logo" className="navbar__logo-size" />
            </figure>
          </a>
        </motion.div>

        <motion.ul
          className="navbar__menu"
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          initial={{ opacity: 0 }}
        >
          <Menu />
        </motion.ul>

        <motion.div
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          initial={{ opacity: 0 }}
        >
          <FontAwesomeIcon
            onClick={() => setToggleMenu(true)}
            icon={faBars}
            className="navbar__menu-icon"
          />
        </motion.div>

        <div
          className={`navbar__menu-responsive  ${
            toggleMenu
              ? `navbar__menu-responsive_open`
              : `navbar__menu-responsive_close`
          }`}
        >
          <div
            className={`${
              toggleMenu
                ? `navbar__menu-responsive_effects`
                : `navbar__menu-responsive_effects-off`
            }`}
          >
            <div className="navbar__menu-responsive_icon">
              <FontAwesomeIcon
                onClick={() => setToggleMenu(false)}
                icon={faXmark}
                className="navbar__menu-responsive_icon-close"
              />
            </div>

            <ul className="navbar__menu-responsive_menu">
              <Menu />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export { Navbar };
