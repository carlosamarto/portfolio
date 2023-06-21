import "./Footer.css";
import { SlSocialGithub, SlSocialInstagram, SlSocialTwitter, SlSocialLinkedin } from "react-icons/sl";

function Footer({ setToggleLang, footerContent, social }) {
	return (
		<>
			<footer className="footer">
				<div className="footer__social footer__social--fade-left">
					<a href={social.github} className="social">
						<SlSocialGithub size="2.4rem" className="social__github" />
					</a>

					<a href={social.instagram} className="social">
						<SlSocialInstagram size="2.4rem" className="social__instagram" />
					</a>

					<a href={social.twitter} className="social">
						<SlSocialTwitter size="2.4rem" className="social__twitter" />
					</a>

					<a href={social.linkedin} className="social">
						<SlSocialLinkedin size="2.4rem" className="social__linkedin" />
					</a>
				</div>

				<a href={footerContent.link} className="footer__credits">
					{footerContent.credits}
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
