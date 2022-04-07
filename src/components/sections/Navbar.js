import { useState } from "react";
import { Menu } from "../elements/Menu";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar__logo'>
          <Link to='/' className='navbar__logo-link'>
            <figure className='navbar__logo-link_container'>
              <img
                src='/Logo.svg'
                alt='Logo'
                className='navbar__logo-link_container-image'
              />
            </figure>
          </Link>
        </div>

        <ul className='navbar__menu'>
          <Menu />
        </ul>

        <div className='navbar__icon'>
          <FaBars
            onClick={() => setToggleMenu(true)}
            className='navbar__icon-responsive'
          />
        </div>

        <div
          className={`navbar__responsive ${
            toggleMenu ? `navbar__responsive-open` : `navbar__responsive-close`
          }
          `}>
          <div
            className={`${
              toggleMenu
                ? `navbar__responsive-container_show`
                : `navbar__responsive-container_hidden`
            }`}>
            <div className='navbar__responsive-container_icon'>
              <RiCloseLine
                onClick={() => setToggleMenu(false)}
                className='navbar__responsive-container_icon-close'
              />
            </div>

            <ul className='navbar__responsive-container_menu'>
              <Menu />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export { Navbar };
