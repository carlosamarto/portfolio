import "./Projects.css";
import { useContext } from "react";
import { Context } from "../../Context";
import { CardProject, CustomTitle } from "../../Components";

function Projects() {
	// Accessing values from the context using useContext hook
	const { data } = useContext(Context);

	// Render UI Section
	return (
		<>
			<section id="projects" className="projects">
				<CustomTitle number={data.projects.sectionNumber} customTitle={data.projects.title} />

				<ul className="projects__cards">
					{data.projects.cardProjects.map((cardProject) => (
						<CardProject
							key={cardProject.title}
							website={cardProject.website}
							github={cardProject.github}
							title={cardProject.title}
							description={cardProject.description}
							technologies={cardProject.technologies}
						/>
					))}
				</ul>
			</section>
		</>
	);
}

export { Projects };
