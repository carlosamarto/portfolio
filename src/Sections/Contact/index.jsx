import "./Contact.css";
import { useContext } from "react";
import { Context } from "../../Context";
import { Button } from "../../Components";
import { useSectionAnimation } from "../../Hooks";

// Render UI Section
function Contact() {
	// Detect if an element is visible on the screen
	const { isVisible, sectionRef } = useSectionAnimation();

	// Accessing values from the context using useContext hook
	const { data } = useContext(Context);

	return (
		<>
			<section id="contact" className={`contact ${isVisible ? "contact--animation" : ""}`} ref={sectionRef}>
				<h4 className="contact__subtitle">{data.contact.subtitle}</h4>

				<h2 className="contact__title">{data.contact.title}</h2>

				<p className="contact__text contact__text--fade-up" dangerouslySetInnerHTML={{ __html: data.contact.text }} />

				<Button link={data.contact.buttonLink} text={data.contact.buttonText} external />
			</section>
		</>
	);
}

export { Contact };
