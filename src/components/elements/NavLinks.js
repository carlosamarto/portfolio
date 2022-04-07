const NavLinks = ({ url, number, text }) => {
  return (
    <>
      <li className='navbar__menu-items'>
        <a href={url} className='navbar__menu-items_links'>
          <strong className='navbar__menu-items_links-number'>{number}</strong>{" "}
          {text}
        </a>
      </li>
    </>
  );
};

export { NavLinks };
