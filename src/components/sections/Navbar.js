import { useState } from "react";
import Menu from "../elements/Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar__logo">
          <a href="/">
            <figure>
              <img src="/Logo.png" alt="Logo" className="navbar__logo-size" />
            </figure>
          </a>
        </div>

        <ul className="navbar__menu">
          <Menu />
        </ul>

        <FontAwesomeIcon
          onClick={() => setToggleMenu(true)}
          icon={faBars}
          className="navbar__menu-icon"
        />

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

export default Navbar;
