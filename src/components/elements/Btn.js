import React from "react";

const Btn = ({ url, text }) => {
  return (
    <>
      <a
        href={url}
        className="inline-block text-paragraph font-moboto text-red border border-red hover:bg-alt transition-all ease-in-out duration-200 py-2 px-8"
      >
        {text}
      </a>
    </>
  );
};

export default Btn;
