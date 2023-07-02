import "./Footer.css";
import { SlSocialGithub, SlSocialInstagram, SlSocialTwitter, SlSocialLinkedin, SlRocket } from "react-icons/sl";

function Footer({ lang, toggleLang, openMenu, data }) {
	// Render UI Layout
	return (
		<>
			<footer className={`footer ${openMenu ? "footer--lock" : "footer--unlock"}`}>
				<div className="social">
					<a href={data.social.github} target="_blank" rel="noopener noreferrer" className="social__links">
						<SlSocialGithub size="2.4rem" className="social__icons" />
					</a>

					<a href={data.social.instagram} target="_blank" rel="noopener noreferrer" className="social__links">
						<SlSocialInstagram size="2.4rem" className="social__icons" />
					</a>

					<a href={data.social.twitter} target="_blank" rel="noopener noreferrer" className="social__links">
						<SlSocialTwitter size="2.4rem" className="social__icons" />
					</a>

					<a href={data.social.linkedin} target="_blank" rel="noopener noreferrer" className="social__links">
						<SlSocialLinkedin size="2.4rem" className="social__icons" />
					</a>
				</div>

				<p className="repository">
					<SlRocket size="1.8rem" color="#ef233c" className="repository__icons" />
					{data.text}
				</p>

				<div className={`toggle ${lang === data.en ? "toggle--en" : "toggle--es"}`}>
					<button className="toggle__en" onClick={() => toggleLang(data.en)}>
						{data.en}
					</button>

					<button className="toggle__es" onClick={() => toggleLang(data.es)}>
						{data.es}
					</button>

					<div className="toggle__slide" data-content="toggle Slide" aria-hidden="true"></div>
				</div>
			</footer>
		</>
	);
}

export { Footer };
