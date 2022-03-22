const Links = ({ url, number, text }) => {
  return (
    <>
      <li>
        <a href={url} className="navbar__menu-links">
          <strong className="navbar__menu-links_number">{number}</strong> {text}
        </a>
      </li>
    </>
  );
};

export { Links };
