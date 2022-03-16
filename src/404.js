import React from "react";
import { Link } from "react-router-dom";
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

        <Link
          to="/"
          className="inline-block text-paragraph font-moboto font-bold text-red border border-red hover:bg-alt transition-all ease-in-out duration-200 py-3 px-12"
        >
          Go Back <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
        </Link>
      </section>
    </>
  );
};

export default NotFound;
