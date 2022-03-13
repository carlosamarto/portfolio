import React from "react";

const Btn = ({ url, text }) => {
  return (
    <>
      <a
        href={url}
        className="inline-block text-paragraph font-rbtmono text-red border border-red hover:bg-alt transition-all ease-in-out duration-300 py-3 px-8"
      >
        {text}
      </a>
    </>
  );
};

export default Btn;
