import React from "react";

const Links = ({ url, number, text }) => {
  return (
    <>
      <li className="group">
        <a
          href={url}
          className="text-paragraph font-roboto text-light group-hover:text-hover transition-all ease-in-out dutation-300"
        >
          <b className="text-small font-rbtmono text-red group-hover:text-hover transition-all ease-in-out dutation-300">
            {number}
          </b>{" "}
          {text}
        </a>
      </li>
    </>
  );
};

export default Links;
