import "./Intro.css";
import { useContext } from "react";
import { Context } from "../../Context";
import { Button } from "../../Components";

function Intro() {
	// Accessing values from the context using useContext hook
	const { data } = useContext(Context);

	// Render UI Section
	return (
		<>
			<section id="intro" className="intro">
				<h4 className="intro__subtitle">{data.intro.subtitle}</h4>

				<h1 className="intro__title">{data.intro.title}</h1>

				<p className="intro__text" dangerouslySetInnerHTML={{ __html: data.intro.text }} />

				<Button link={data.intro.buttonLink} text={data.intro.buttonText} />
			</section>
		</>
	);
}

export { Intro };
