import "./Projects.css";
import { Project, Title } from "../../Components";

function Projects({ data }) {
	// Render UI Section
	return (
		<>
			<section id="projects" className="projects">
				<Title number={data.number} title={data.title} />

				<ul className="projects__grid">
					{data.cards.map((project) => (
						<Project
							key={project.title}
							website={project.website}
							github={project.github}
							title={project.title}
							description={project.description}
							skills={project.skills}
						/>
					))}
				</ul>
			</section>
		</>
	);
}

export { Projects };
