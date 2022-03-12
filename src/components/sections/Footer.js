import React from "react";
import Icons from "../elements/Icons";

const Footer = () => {
  return (
    <>
      <footer class="h-24 flex lg:flex-row flex-col gap-2 justify-center items-center">
        <a
          href="https://github.com/carlosmrtzodev/portfolio"
          target="_blank"
          rel="noreferrer"
          className="text-paragraph font-rbtmono text-center text-red hover:text-hover transition-all ease-in-out duration-300"
        >
          Created by Carlos Martínez.
        </a>
        <Icons />
      </footer>
    </>
  );
};

export default Footer;
