import React from "react";

const Section = ({ id, children, type }) => {
  return (
    <>
      <section id={id} className={`flex ${type} md:min-h-vh`}>
        {children}
      </section>
    </>
  );
};

export default Section;
