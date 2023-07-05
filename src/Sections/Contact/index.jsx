import "./Contact.css";
import { useContext } from "react";
import { Context } from "../../Context";
import { Button } from "../../Components";

function Contact() {
	// Accessing values from the context using useContext hook
	const { data } = useContext(Context);

	// Render UI Section
	return (
		<>
			<section id="contact" className="contact">
				<h4 className="contact__subtitle">{data.contact.subtitle}</h4>

				<h2 className="contact__title">{data.contact.title}</h2>

				<p className="contact__text contact__text--fade-up" dangerouslySetInnerHTML={{ __html: data.contact.text }} />

				<Button link={data.contact.buttonLink} text={data.contact.buttonText} external />
			</section>
		</>
	);
}

export { Contact };
