import React from "react";

const Icons = ({ children, url, classes }) => {
  return (
    <>
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className={`${classes} transition-all ease-in-out duration-200`}
      >
        {children}
      </a>
    </>
  );
};

export default Icons;
