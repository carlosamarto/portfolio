import "./Footer.css";
import { SlSocialGithub, SlSocialInstagram, SlSocialTwitter, SlSocialLinkedin, SlRocket } from "react-icons/sl";

function Footer({ lang, toggleLang, openMenu, data }) {
	// Render UI Layout
	return (
		<>
			<footer className={`footer ${openMenu ? "footer--lock" : "footer--unlock"}`}>
				<div className="social">
					<a href={data.social.github} className="social__links">
						<SlSocialGithub size="2.4rem" className="social__icons" />
					</a>

					<a href={data.social.instagram} className="social__links">
						<SlSocialInstagram size="2.4rem" className="social__icons" />
					</a>

					<a href={data.social.twitter} className="social__links">
						<SlSocialTwitter size="2.4rem" className="social__icons" />
					</a>

					<a href={data.social.linkedin} className="social__links">
						<SlSocialLinkedin size="2.4rem" className="social__icons" />
					</a>
				</div>

				<a href={data.link} className="repository">
					<SlRocket size="1.8rem" color="#ef233c" className="repository__icons" />
					{data.text}
				</a>

				<div className={`toggle ${lang === data.en ? "toggle--en" : "toggle--es"}`}>
					<dir className="toggle__en" onClick={() => toggleLang(data.en)}>
						{data.en}
					</dir>

					<div className="toggle__es" onClick={() => toggleLang(data.es)}>
						{data.es}
					</div>

					<div className="toggle__slide"></div>
				</div>
			</footer>
		</>
	);
}

export { Footer };
