import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const NotFound = () => {
  return (
    <>
      <section id='error' className='section error'>
        <p className='error__message'>404: This page could not be found</p>

        <Link to='/' className='button__primary'>
          <FaArrowLeft /> Go Back
        </Link>
      </section>
    </>
  );
};

export { NotFound };
