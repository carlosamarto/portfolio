import "./About.css";

function About({ profileImage, skills, isVisible, sectionRef, data }) {
	return (
		<>
			<section id="about" className={`about ${isVisible ? "fade-in" : ""}`} ref={sectionRef}>
				<div className="about__presentation">
					<div className="about__titles">
						<span className="about__number">01.</span>
						<h2 className="about__title">{data.title}</h2>
					</div>

					<div className="about__line"></div>
				</div>

				<div className="about__content">
					<div className="about__box">
						<p className="about__description" dangerouslySetInnerHTML={{ __html: data.description }} />

						<ul className="about__skills">
							{skills.map((skill, index) => (
								<li key={index} className="about__skill">
									{skill.name}
								</li>
							))}
						</ul>
					</div>

					<figure className="about__figure">
						<img src={profileImage} alt={data.imageCaption} className="about__image" />
					</figure>
				</div>
			</section>
		</>
	);
}

export { About };
