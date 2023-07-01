import "./Intro.css";
import { Button } from "../../Components";

function Intro({ data }) {
	// Render UI Section
	return (
		<>
			<section id="intro" className="intro">
				<h4 className="intro__subtitle">{data.subtitle}</h4>

				<h1 className="intro__title">{data.title}</h1>

				<p className="intro__text" dangerouslySetInnerHTML={{ __html: data.text }} />

				<Button link={data.link} size="big" text={data.button} />
			</section>
		</>
	);
}

export { Intro };
