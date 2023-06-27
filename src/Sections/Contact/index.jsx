import "./Contact.css";
import { Button } from "../../Components";

function Contact({ titleName, linkButton, data }) {
	return (
		<>
			<section id="contact" className="contact">
				<h3 className="contact__text">{data.title}</h3>

				<h2 className="contact__title">{titleName}</h2>

				<p
					className="contact__description contact__description--fade-up"
					dangerouslySetInnerHTML={{ __html: data.description }}
				/>

				<Button link={linkButton} size="default" text={data.textButton} />
			</section>
		</>
	);
}

export { Contact };
