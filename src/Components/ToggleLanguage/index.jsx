import "./ToggleLanguage.css";
import { useContext } from "react";
import { Context } from "../../Context";

// Render UI Component
function ToggleLanguage({ langTagEn, langTagEs }) {
	// Accessing values from the context using useContext hook
	const { isAnimationFinished, lang, toggleLang } = useContext(Context);

	return (
		<>
			<div
				className={`toggle-language ${lang === langTagEn ? "toggle-language--en" : "toggle-language--es"} ${
					isAnimationFinished ? "toggle-language--animation-done" : "toggle-language--animation-start"
				}`}
			>
				<button type="button" className="toggle-language__button" onClick={() => toggleLang(langTagEn)}>
					{langTagEn}
				</button>

				<button type="button" className="toggle-language__button" onClick={() => toggleLang(langTagEs)}>
					{langTagEs}
				</button>
			</div>
		</>
	);
}

export { ToggleLanguage };
