import "./SocialBar.css";
import { useContext } from "react";
import { Context } from "../../Context";
import { ImCodepen } from "react-icons/im";
import { SlSocialGithub, SlSocialInstagram, SlSocialTwitter, SlSocialLinkedin } from "react-icons/sl";
import PropTypes from "prop-types";

// Render UI Component
function SocialBar({ links }) {
	// Accessing values from the context using useContext hook
	const { isAnimationFinished } = useContext(Context);

	return (
		<>
			<div
				className={`social-bar ${isAnimationFinished ? "social-bar--animation-done" : "social-bar--animation-start"}`}
			>
				<a
					href={links.github}
					aria-label="github"
					target="_blank"
					rel="noopener noreferrer"
					className="social-bar__link"
				>
					<SlSocialGithub size="2.4rem" className="social-bar__icon" />
				</a>

				<a
					href={links.instagram}
					aria-label="instagram"
					target="_blank"
					rel="noopener noreferrer"
					className="social-bar__link"
				>
					<SlSocialInstagram size="2.4rem" className="social-bar__icon" />
				</a>

				<a
					href={links.twitter}
					aria-label="twitter"
					target="_blank"
					rel="noopener noreferrer"
					className="social-bar__link"
				>
					<SlSocialTwitter size="2.4rem" className="social-bar__icon" />
				</a>

				<a
					href={links.linkedin}
					aria-label="linkedin"
					target="_blank"
					rel="noopener noreferrer"
					className="social-bar__link"
				>
					<SlSocialLinkedin size="2.4rem" className="social-bar__icon" />
				</a>

				<a
					href={links.codepen}
					aria-label="codepen"
					target="_blank"
					rel="noopener noreferrer"
					className="social-bar__link"
				>
					<ImCodepen size="2.4rem" className="social-bar__icon" />
				</a>
			</div>
		</>
	);
}

SocialBar.propTypes = {
	links: PropTypes.object.isRequired,
};

export { SocialBar };
