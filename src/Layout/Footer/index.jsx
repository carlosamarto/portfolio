import "./Footer.css";
import { SlSocialGithub, SlSocialInstagram, SlSocialTwitter, SlSocialLinkedin, SlRocket } from "react-icons/sl";

function Footer({ openMenu, lang, toggleLang, social, portfolioLink, data }) {
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

				<a href={portfolioLink} className="footer__link">
					{data.text} <SlRocket size="1.8rem" className="footer__icon" />
				</a>

				<div className={`toggle ${lang === "es" ? "toggle--es" : "toggle--en"} toggle--fade-right`}>
					<dir className="toggle__en" onClick={() => toggleLang("en")}>
						En
					</dir>

					<div className="toggle__es" onClick={() => toggleLang("es")}>
						Es
					</div>

					<div className="toggle__slide"></div>
				</div>
			</footer>
		</>
	);
}

export { Footer };
