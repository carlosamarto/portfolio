import "./Header.css";
import { useContext } from "react";
import { Context } from "../../Context";
import { Logo, Menu, MenuAside, MenuIcon } from "../../Components";

function Header() {
	// Accessing values from the context using useContext hook
	const { isAnimationFinished, isHeaderVisible, prevScrollPos } = useContext(Context);

	// Render UI Layout
	return (
		<>
			<header
				className={`header ${isHeaderVisible ? "header--show" : "header--hide"} ${
					prevScrollPos > 32 ? "header--active" : "header--inactive"
				}`}
			>
				<nav className="nav">
					<a
						href="/"
						className={`nav__logo ${isAnimationFinished ? "nav__logo--animation-done" : "nav__logo--animation-start"}`}
					>
						<Logo width={48} height={48} />
					</a>

					<MenuIcon />

					<MenuAside />

					<Menu />
				</nav>
			</header>
		</>
	);
}

export { Header };
