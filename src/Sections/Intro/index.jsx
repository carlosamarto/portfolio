import "./Intro.css";

import { Button } from "../../Components";

function Intro({ titleName, linkButton, data }) {
	return (
		<>
			<section id="intro" className="intro">
				<span className="intro__text intro__text--fade-up">{data.title}</span>

				<h1 className="intro__title intro__title--fade-up">{titleName}</h1>

				<p
					className="intro__description intro__description--fade-up"
					dangerouslySetInnerHTML={{ __html: data.description }}
				/>

				<Button link={linkButton} className="button--fade-up" size="big" text={data.textButton} />
			</section>
		</>
	);
}

export { Intro };
