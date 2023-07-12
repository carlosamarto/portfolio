import "./LanguageButton.css";
import { useContext } from "react";
import { Context } from "../../Context";

function LanguageButton({ langTagEn, langTagEs }) {
	// Accessing values from the context using useContext hook
	const { isAnimationFinished, lang, toggleLang } = useContext(Context);

	// Render UI Layout
	return (
		<>
			<div
				className={`toggle ${lang === langTagEn ? "toggle--en" : "toggle--es"} ${
					isAnimationFinished ? "toggle--animation-done" : "toggle--animation-start"
				}`}
			>
				<button type="button" className="toggle__button" onClick={() => toggleLang(langTagEn)}>
					{langTagEn}
				</button>

				<button type="button" className="toggle__button" onClick={() => toggleLang(langTagEs)}>
					{langTagEs}
				</button>
			</div>
		</>
	);
}

export { LanguageButton };
