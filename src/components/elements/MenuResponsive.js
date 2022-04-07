import { Menu } from "../elements/Menu";
import { RiCloseLine } from "react-icons/ri";

const MenuResponsive = ({ toggle, setToggle }) => {
  return (
    <div
      className={`navbar__responsive ${
        toggle ? `navbar__responsive-open` : `navbar__responsive-close`
      }
          `}>
      <div
        className={`${
          toggle
            ? `navbar__responsive-container_show`
            : `navbar__responsive-container_hidden`
        }`}>
        <div className='navbar__responsive-container_icon'>
          <RiCloseLine
            onClick={() => setToggle(false)}
            className='navbar__responsive-container_icon-close'
          />
        </div>

        <ul className='navbar__responsive-container_menu'>
          <Menu />
        </ul>
      </div>
    </div>
  );
};

export { MenuResponsive };
