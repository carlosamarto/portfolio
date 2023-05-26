import "./Intro.css";
import { Button } from "../../Components";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

function Intro() {
	return (
		<>
			<section className="intro">
				<div>
					<h1>Carlos Martínez.</h1>

					<h2>My goal is to create cool things.</h2>
				</div>

				<p>
					I’m a <span>Front End Developer</span> specialized in creating cool and unique style websites and interfaces.
					Currently, I’m focused on being better at what I do and continuing to learn more.
				</p>

				<Button />

				<div>
					<a href="https://github.com/">
						<BsGithub />
					</a>

					<a href="https://www.linkedin.com/in/carlosmrtzor/">
						<BsLinkedin />
					</a>

					<a href="https://twitter.com/carlosmrtzor">
						<BsTwitter />
					</a>
				</div>
			</section>
		</>
	);
}

export { Intro };
