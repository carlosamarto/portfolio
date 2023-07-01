import "./Project.css";
import { VscLinkExternal } from "react-icons/vsc";
import { SlSocialGithub, SlFolder } from "react-icons/sl";

function Project({ website, github, title, description, skills }) {
	// Render UI Component
	return (
		<>
			<li className="project">
				<header className="project__header">
					<div className="project__top">
						<div className="project__folder">
							<SlFolder size="3.2rem" className="project__icons" />
						</div>

						<div className="project__links">
							{github && (
								<a href={github} className="project__link">
									<SlSocialGithub size="2.4rem" className="project__icons" />
								</a>
							)}

							{website && (
								<a href={website} className="project__link">
									<VscLinkExternal size="2.4rem" className="project__icons" />
								</a>
							)}
						</div>
					</div>

					<h3 className="project__title">{title}</h3>

					<p className="project__description">{description}</p>
				</header>

				<footer className="project__footer">
					<ul className="project__skills">
						{skills.map((skill, index) => (
							<li key={index} className="project__skill">
								<span className="project__name">{skill}</span>
							</li>
						))}
					</ul>
				</footer>
			</li>
		</>
	);
}

export { Project };
