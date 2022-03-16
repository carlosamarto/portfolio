const Links = ({ url, number, text }) => {
  return (
    <>
      <li className="group">
        <a
          href={url}
          className="text-paragraph font-roboto text-light group-hover:text-hover transition-all ease-in-out duration-200"
        >
          <strong className="text-small font-moboto text-red group-hover:text-hover transition-all ease-in-out duration-200">
            {number}
          </strong>{" "}
          {text}
        </a>
      </li>
    </>
  );
};

export default Links;
