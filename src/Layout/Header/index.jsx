import "./Header.css";
import { MenuItems } from "../../Components/";

function Header({ isHeaderVisible, prevScrollPos, isDesktop, openMenu, setOpenMenu, headerContent }) {
	return (
		<>
			<header className={`header ${isHeaderVisible ? "header--show" : "header--hide"}`}>
				<nav className={`header__nav ${prevScrollPos > 0 ? "header__nav--shadow" : "header__nav--initial"}`}>
					<a href="/" className="logo logo--fade-down">
						C
					</a>

					{!isDesktop && (
						<div
							className={`hamburger hamburger--fade-down ${openMenu ? "hamburger--open" : "hamburger--close"}`}
							onClick={() => setOpenMenu((prevState) => !prevState)}
						>
							<div className="hamburger__inner"></div>
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
