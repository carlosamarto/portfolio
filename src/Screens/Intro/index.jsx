import "./Intro.css";

import { Button } from "../../Components";

function Intro({ introContent }) {
	return (
		<>
			<section id="intro" className="intro">
				<div className="intro__container">
					<span className="intro__text intro__text--fade-up">{introContent.text}</span>

					<h1 className="intro__title intro__title--fade-up">{introContent.title}</h1>

					<h2 className="intro__subtitle intro__subtitle--fade-up">{introContent.subtitle}</h2>
				</div>

				<div className="intro__button">
					<Button text={introContent.ctaButton} size="big" />
				</div>
			</section>
		</>
	);
}

export { Intro };
