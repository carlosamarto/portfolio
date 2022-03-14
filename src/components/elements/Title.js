import React from "react";

const Title = ({ number, text }) => {
  return (
    <h3 className="relative text-subtitle font-roboto font-bold text-light after:content-[''] after:absolute after:top-2/4 after:inline-flex after:bg-red after:w-2/4 after:h-mini after:ml-4">
      <span className="text-paragraph font-moboto text-red">{number}</span>{" "}
      {text}
    </h3>
  );
};

export default Title;
