import "./Intro.css";

import { Button } from "../../Components";

function Intro({ introContent }) {
	return (
		<>
			<section id="intro" className="intro">
				<span className="intro__subtitle intro__subtitle--fade-up">{introContent.text}</span>

				<h1 className="intro__title intro__title--fade-up">{introContent.title}</h1>

				<p
					className="intro__description intro__description--fade-up"
					dangerouslySetInnerHTML={{ __html: introContent.description }}
				/>

				<Button className="button--fade-up" size="big" text={introContent.ctaButton} />
			</section>
		</>
	);
}

export { Intro };
