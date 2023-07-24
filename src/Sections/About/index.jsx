import "./About.css";
import { useContext } from "react";
import { Context } from "../../Context";
import { CustomTitle } from "../../Components";
import { useSectionAnimation } from "../../Hooks";

// Render UI Section
function About() {
	// Detect if an element is visible on the screen
	const { isVisible, sectionRef } = useSectionAnimation();

	// Accessing values from the context using useContext hook
	const { data } = useContext(Context);

	return (
		<>
			<section id="about" className={`about ${isVisible ? "about--animation" : ""}`} ref={sectionRef}>
				<CustomTitle number={data.about.sectionNumber} customTitle={data.about.title} />

				<div className="about__container">
					<div className="about__content">
						<p className="about__description" dangerouslySetInnerHTML={{ __html: data.about.description }} />

						<ul className="about__list">
							{data.about.technologies.map((technology) => (
								<li key={technology.technologyName} className="about__technologies">
									<span className="about__technology">{technology.technologyName}</span>
								</li>
							))}
						</ul>
					</div>

					<figure className="about__figure">
						<img
							src={data.about.imageProfile}
							alt={data.about.imageCaption}
							title={data.about.imageCaption}
							className="about__image"
						/>
					</figure>
				</div>
			</section>
		</>
	);
}

export { About };
