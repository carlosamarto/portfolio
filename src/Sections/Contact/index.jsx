import "./Contact.css";
import { Button } from "../../Components";

function Contact({ data }) {
	// Render UI Section
	return (
		<>
			<section id="contact" className="contact">
				<h4 className="contact__subtitle">{data.subtitle}</h4>

				<h2 className="contact__title">{data.title}</h2>

				<p className="contact__text contact__text--fade-up" dangerouslySetInnerHTML={{ __html: data.text }} />

				<Button link={data.link} size="default" text={data.button} />
			</section>
		</>
	);
}

export { Contact };
