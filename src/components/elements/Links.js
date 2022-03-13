import React from "react";

const Links = ({ url, number, text }) => {
  return (
    <>
      <li className="group">
        <a
          href={url}
          className="text-paragraph font-roboto text-light group-hover:text-hover transition-all ease-in-out duration-200"
        >
          <b className="text-small font-moboto text-red group-hover:text-hover transition-all ease-in-out duration-200">
            {number}
          </b>{" "}
          {text}
        </a>
      </li>
    </>
  );
};

export default Links;
