import React from "react";

const Icons = ({ children, url, type }) => {
  return (
    <>
      {type ? (
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="text-paragraph text-light"
        >
          {children}
        </a>
      ) : (
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="text-subtitle text-light hover:text-hover transition-all ease-in-out duration-200"
        >
          {children}
        </a>
      )}
    </>
  );
};

export default Icons;
