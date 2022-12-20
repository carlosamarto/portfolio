import "./Header.css";
import { CgMenuRight } from "react-icons/cg";

function Header() {
	return (
		<>
			<header className="portfolio--header">
				<img src="./Logo.svg" alt="Carlos Martínez Logo" className="portfolio--header-logo" />

				<span className="portfolio--header-icon">
					<CgMenuRight />
				</span>
			</header>
		</>
	);
}

export { Header };
