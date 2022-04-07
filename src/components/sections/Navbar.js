import { useState } from "react";
import { motion } from "framer-motion";
import { Menu } from "../elements/Menu";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { Logo } from "../elements/Logo";
import { MenuResponsive } from "../elements/MenuResponsive";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <nav className='navbar'>
        <motion.div
          initial={{ x: -500 }}
          animate={{ x: 0 }}
          transition={{ ease: "easeOut", duration: 2 }}
          className='navbar__logo'>
          <Link to='/' className='navbar__logo-link'>
            <Logo />
          </Link>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 2 }}
          className='navbar__menu'>
          <Menu />
        </motion.ul>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 2 }}
          className='navbar__icon'>
          <FaBars
            onClick={() => setToggleMenu(true)}
            className='navbar__icon-responsive'
          />
        </motion.div>

        <MenuResponsive toggle={toggleMenu} setToggle={setToggleMenu} />
      </nav>
    </>
  );
};

export { Navbar };
