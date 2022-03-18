import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const NotFound = () => {
  return (
    <>
      <section id="404" className="section__error">
        <p className="error__message">404: This page could not be found</p>

        <Link to="/" className="btn">
          Go Back <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
        </Link>
      </section>
    </>
  );
};

export default NotFound;
