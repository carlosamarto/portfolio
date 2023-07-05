import "./SocialBar.css";
import { SlSocialGithub, SlSocialInstagram, SlSocialTwitter, SlSocialLinkedin } from "react-icons/sl";

function SocialBar({ links }) {
	//Render UI Component
	return (
		<>
			<div className="social">
				<a href={links.github} target="_blank" rel="noopener noreferrer" className="social__link">
					<SlSocialGithub size="2.4rem" className="social__icon" />
				</a>

				<a href={links.instagram} target="_blank" rel="noopener noreferrer" className="social__link">
					<SlSocialInstagram size="2.4rem" className="social__icon" />
				</a>

				<a href={links.twitter} target="_blank" rel="noopener noreferrer" className="social__link">
					<SlSocialTwitter size="2.4rem" className="social__icon" />
				</a>

				<a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="social__link">
					<SlSocialLinkedin size="2.4rem" className="social__icon" />
				</a>
			</div>
		</>
	);
}

export { SocialBar };