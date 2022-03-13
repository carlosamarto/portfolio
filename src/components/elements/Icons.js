import React from "react";

const Icons = ({ children, url }) => {
  return (
    <>
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="text-subtitle text-light hover:text-hover transition-all ease-in-out duration-200"
      >
        {children}
      </a>
    </>
  );
};

export default Icons;
