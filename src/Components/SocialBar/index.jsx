import "./SocialBar.css";
import { useContext } from "react";
import { Context } from "../../Context";
import { ImCodepen } from "react-icons/im";
import { SlSocialGithub, SlSocialInstagram, SlSocialTwitter, SlSocialLinkedin } from "react-icons/sl";

function SocialBar({ links }) {
	// Accessing values from the context using useContext hook
	const { isAnimationFinished } = useContext(Context);

	// Render UI Component
	return (
		<>
			<div className={`social ${isAnimationFinished ? "social--animation-done" : "social--animation-start"}`}>
				<a href={links.github} aria-label="github" target="_blank" rel="noopener noreferrer" className="social__link">
					<SlSocialGithub size="2.4rem" className="social__icon" />
				</a>

				<a
					href={links.instagram}
					aria-label="instagram"
					target="_blank"
					rel="noopener noreferrer"
					className="social__link"
				>
					<SlSocialInstagram size="2.4rem" className="social__icon" />
				</a>

				<a href={links.twitter} aria-label="twitter" target="_blank" rel="noopener noreferrer" className="social__link">
					<SlSocialTwitter size="2.4rem" className="social__icon" />
				</a>

				<a
					href={links.linkedin}
					aria-label="linkedin"
					target="_blank"
					rel="noopener noreferrer"
					className="social__link"
				>
					<SlSocialLinkedin size="2.4rem" className="social__icon" />
				</a>

				<a href={links.codepen} aria-label="codepen" target="_blank" rel="noopener noreferrer" className="social__link">
					<ImCodepen size="2.4rem" className="social__icon" />
				</a>
			</div>
		</>
	);
}

export { SocialBar };
