import "./About.css";
import { Title } from "../../Components/Title";

function About({ data }) {
	// Render UI Section
	return (
		<>
			<section id="about" className="about">
				<Title number={data.number} title={data.title} />

				<div className="about__container">
					<div className="about__content">
						<p className="about__description" dangerouslySetInnerHTML={{ __html: data.description }} />

						<ul className="about__list">
							{data.skills.map((skill) => (
								<li key={skill.name} className="about__skills">
									<span className="about__skill">{skill.name}</span>
								</li>
							))}
						</ul>
					</div>

					<figure className="about__figure">
						<img src={data.profile} alt={data.caption} title={data.caption} className="about__image" />
					</figure>
				</div>
			</section>
		</>
	);
}

export { About };
