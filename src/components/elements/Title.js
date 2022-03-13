import React from "react";

const Title = ({ number, text }) => {
  return (
    <h3 className="relative text-subtitle font-roboto font-bold text-light w-2/4 after:content-[''] after:inline-flex after:absolute after:top-2/4 after:w-full after:h-min after:ml-4 after:bg-red">
      <span className="text-paragraph font-moboto text-red">{number}</span>{" "}
      {text}
    </h3>
  );
};

export default Title;
