import Btn from "../elements/Btn";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <section id="contact" className="section__contact">
      <div className="contact__container">
        <h3 className="contact__container-title">
          <strong className="contact__container-title_number">04. </strong>
          Get in Touch
        </h3>

        <p>
          I’m currently open to new job opportunities, if you want to contact me
          you can do it through my <strong>Networks</strong> or send me an{" "}
          <strong>E-mail</strong> to the following link.
        </p>

        <Btn
          url="mailto:carlosmrtzodev@gmail.com"
          target="_blank"
          rel="noreferrer"
          text="Let's Talk."
          classes="btn__contact"
          icon={<FontAwesomeIcon icon={faEnvelope} className="ml-2" />}
        />
      </div>
    </section>
  );
};

export default Contact;
