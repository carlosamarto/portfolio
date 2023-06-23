import "./Footer.css";
import { SlSocialGithub, SlSocialInstagram, SlSocialTwitter, SlSocialLinkedin } from "react-icons/sl";

function Footer({ openMenu, toggleLang, setToggleLang, footerContent, social }) {
	return (
		<>
			<footer className={`footer ${openMenu ? "footer--locked" : "footer--unlocked"}`}>
				<div className="social social--fade-left">
					<a href={social.github} className="social__link">
						<SlSocialGithub size="2.4rem" className="social__icon" />
					</a>

					<a href={social.instagram} className="social__link">
						<SlSocialInstagram size="2.4rem" className="social__icon" />
					</a>

					<a href={social.twitter} className="social__link">
						<SlSocialTwitter size="2.4rem" className="social__icon" />
					</a>

					<a href={social.linkedin} className="social__link">
						<SlSocialLinkedin size="2.4rem" className="social__icon" />
					</a>
				</div>

				<a href="https://github.com/carlosmrtzor/portfolio" className="footer__link">
					{footerContent.link}
				</a>

				<div className={`toggle ${toggleLang ? "toggle--es" : "toggle--en"} toggle--fade-right`}>
					<dir className="toggle__en" onClick={() => setToggleLang(false)}>
						En
					</dir>

					<div className="toggle__es" onClick={() => setToggleLang(true)}>
						Es
					</div>

					<div className="toggle__slide"></div>
				</div>
			</footer>
		</>
	);
}

export { Footer };
