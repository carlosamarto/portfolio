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

						<ul className="project__list">
							{github && (
								<li className="project__items">
									<a href={github} target="_blank" rel="noopener noreferrer" className="project__item">
										<SlSocialGithub size="2.4rem" className="project__icons" />
									</a>
								</li>
							)}

							{website && (
								<li className="project__items">
									<a href={website} target="_blank" rel="noopener noreferrer" className="project__item">
										<VscLinkExternal size="2.4rem" className="project__icons" />
									</a>
								</li>
							)}
						</ul>
					</div>

					<h3 className="project__title">
						<a href={website || github} target="_blank" rel="noopener noreferrer" className="project__link">
							{title}
						</a>
					</h3>

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
