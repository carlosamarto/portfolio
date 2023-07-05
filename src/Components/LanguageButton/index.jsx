import "./LanguageButton.css";
import { useContext } from "react";
import { Context } from "../../Context";

function LanguageButton({ langTagEn, langTagEs }) {
	// Use Context
	const { lang, toggleLang } = useContext(Context);

	// Render UI Layout
	return (
		<>
			<div className={`toggle ${lang === langTagEn ? "toggle--en" : "toggle--es"}`}>
				<button className="toggle__button" onClick={() => toggleLang(langTagEn)}>
					{langTagEn}
				</button>

				<button className="toggle__button" onClick={() => toggleLang(langTagEs)}>
					{langTagEs}
				</button>

				<div className="toggle__slide" data-content="toggle Slide" aria-hidden="true"></div>
			</div>
		</>
	);
}

export { LanguageButton };