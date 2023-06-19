import "./Footer.css";
import { SlSocialGithub, SlSocialInstagram, SlSocialTwitter, SlSocialLinkedin } from "react-icons/sl";

function Footer({ toggleLang, setToggleLang, footerContent }) {
	return (
		<>
			<footer className="footer">
				<div className="footer__social footer__social--fade-left">
					<span className="footer__icons">
						<SlSocialGithub />
					</span>

					<span className="footer__icons">
						<SlSocialInstagram />
					</span>

					<span className="footer__icons">
						<SlSocialTwitter />
					</span>

					<span className="footer__icons">
						<SlSocialLinkedin />
					</span>
				</div>

				<div className="footer__credits">
					<a href="#" className="footer__link">
						{footerContent.link}
					</a>
				</div>

				<div className="footer__widget footer__widget--fade-right">
					<span className="footer__lang" onClick={() => setToggleLang((prevState) => !prevState)}>
						{toggleLang ? "EN" : "ES"}
					</span>
				</div>
			</footer>
		</>
	);
}

export { Footer };
