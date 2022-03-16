import React from "react";
import { Link } from "react-router-dom";
import Btn from "./components/elements/Btn";
import Container from "./components/Container/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const NotFound = () => {
  return (
    <>
      <section
        id="404"
        className="flex flex-col items-center justify-center gap-6 xxl:min-h-full md:min-h-vh"
      >
        <h1 className="text-subtitle font-moboto text-red">
          404: This page could not be found
        </h1>

        <Link to="/">
          <Btn
            text="Go Back"
            url=""
            target="_self"
            rel="author"
            classes="py-3 px-12"
            icon={<FontAwesomeIcon icon={faArrowRight} className="ml-2" />}
          />
        </Link>
      </section>
    </>
  );
};

export default NotFound;
