import React from "react";

const Btn = ({ url, text }) => {
  return (
    <>
      <a
        href={url}
        className="text-paragraph font-rbtmono text-red border-red hover:bg-alt border inline-block transition-all ease-in-out duration-300 py-3 px-8"
      >
        {text}
      </a>
    </>
  );
};

export default Btn;
