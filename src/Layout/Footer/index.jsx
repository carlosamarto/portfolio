import "./Footer.css";
import { SlSocialGithub, SlSocialInstagram, SlSocialTwitter, SlSocialLinkedin } from "react-icons/sl";

function Footer({ setToggleLang, footerContent, social }) {
	return (
		<>
			<footer className="footer">
				<div className="footer__social footer__social--fade-left">
					<a href={social.github} className="icon">
						<SlSocialGithub className="icon__github" />
					</a>

					<a href={social.instagram} className="icon">
						<SlSocialInstagram className="icon__instagram" />
					</a>

					<a href={social.twitter} className="icon">
						<SlSocialTwitter className="icon__twitter" />
					</a>

					<a href={social.linkedin} className="icon">
						<SlSocialLinkedin className="icon__linkedin" />
					</a>
				</div>

				<a href="#" className="footer__credits">
					{footerContent.link}
				</a>

				<span
					className="footer__lang footer__lang--fade-right"
					onClick={() => setToggleLang((prevState) => !prevState)}
				>
					{footerContent.lang}
				</span>
			</footer>
		</>
	);
}

export { Footer };
