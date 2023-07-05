import "./Footer.css";
import { useContext } from "react";
import { Context } from "../../Context";
import { SlRocket } from "react-icons/sl";
import { LanguageButton, SocialBar } from "../../Components";

function Footer() {
	// Accessing values from the context using useContext hook
	const { openMenu, data } = useContext(Context);

	// Render UI Layout
	return (
		<>
			<footer className={`footer ${openMenu ? "footer--lock" : "footer--unlock"}`}>
				<SocialBar links={data.footer.social} />

				<p className="footer__text">
					<SlRocket size="1.8rem" color="#ef233c" className="footer__icon" />
					{data.footer.text}
				</p>

				<LanguageButton langTagEn={data.footer.langEn} langTagEs={data.footer.langEs} />
			</footer>
		</>
	);
}

export { Footer };
