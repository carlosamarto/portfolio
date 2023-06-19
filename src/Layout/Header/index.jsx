import "./Header.css";
import { MenuItems } from "../../Components/";

function Header({ isHeaderVisible, prevScrollPos, isDesktop, openMenu, setOpenMenu, headerContent }) {
	return (
		<>
			<header className={`header ${isHeaderVisible ? "header--show" : "header--hide"}`}>
				<nav className={`nav ${prevScrollPos > 0 ? "nav--shadow" : "nav--initial"}`}>
					<a href="/" className="logo">
						C
					</a>

					{!isDesktop && (
						<div
							className={`menu-icon menu-icon--fade-down ${openMenu ? "menu-icon--open" : "menu-icon--close"}`}
							onClick={() => setOpenMenu((prevState) => !prevState)}
						>
							<div className="menu-icon__inner"></div>
						</div>
					)}

					{isDesktop ? (
						<ul className="menu">
							<MenuItems headerContent={headerContent} />
						</ul>
					) : (
						<ul className={`menu menu--mobile ${openMenu ? "menu--open" : "menu--close"}`}>
							<MenuItems headerContent={headerContent} />
						</ul>
					)}
				</nav>
			</header>
		</>
	);
}

export { Header };
