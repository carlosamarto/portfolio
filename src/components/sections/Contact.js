import Btn from "../elements/Btn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex justify-center items-center xxl:min-h-full md:min-h-vh"
    >
      <div className="text-center flex flex-col gap-8 md:w-2/3 w-full">
        <h3 className="lg:text-title text-mobile font-roboto font-bold text-light leading-none">
          <strong className="lg:text-mobile text-subtitle text-red">
            04.{" "}
          </strong>
          Get in Touch
        </h3>

        <p className="text-paragraph font-moboto text-text">
          I’m currently open to new job opportunities, if you want to contact me
          you can do it through my{" "}
          <strong className="text-red font-normal">Networks</strong> or send me
          an <strong className="text-red font-normal">E-mail</strong> to the
          following link.
        </p>

        <Btn
          url="mailto:carlosmrtzodev@gmail.com"
          target="_blank"
          rel="noreferrer"
          text="Let's Talk."
          classes="px-12 py-4"
          icon={<FontAwesomeIcon icon={faEnvelope} className="ml-2" />}
        />
      </div>
    </section>
  );
};

export default Contact;
