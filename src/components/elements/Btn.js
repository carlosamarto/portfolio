import React from "react";

const Btn = ({ url, text, classes }) => {
  return (
    <>
      <div>
        <a
          href={url}
          className={`inline-block text-paragraph font-moboto text-red border border-red hover:bg-alt transition-all ease-in-out duration-200 ${classes}`}
        >
          {text}
        </a>
      </div>
    </>
  );
};

export default Btn;
