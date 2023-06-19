import "./Intro.css";

import { Button } from "../../Components";

function Intro({ setToggleLang, introContent }) {
	return (
		<>
			<section id="intro" className="intro">
				<div className="intro__titles">
					<span className="intro__greetings">{introContent.greetings}</span>

					<h1 className="intro__title" onClick={() => setToggleLang((prevState) => !prevState)}>
						{introContent.title}
					</h1>

					<h2 className="intro__subtitle">{introContent.subtitle}</h2>
				</div>

				<div>
					<Button text={introContent.ctaButton} size="big" />
				</div>
			</section>
		</>
	);
}

export { Intro };
