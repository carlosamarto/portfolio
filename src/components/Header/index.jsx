import "./Header.css";
import { Logo } from "../Logo";
import { MenuItems } from "../MenuItems";

function Header({ isDesktop, openMenu, setOpenMenu, isHeaderVisible, prevScrollPos, menuItems }) {
	return (
		<>
			<header className={`header ${isHeaderVisible ? "header--show" : "header--hide"}`}>
				<nav className={`header--nav ${prevScrollPos > 0 ? "header--nav_shadow" : "header--nav_initial"}`}>
					<a href="/" className="header--nav_logo">
						<Logo width="48" height="48" />
					</a>

					{!isDesktop && (
						<div
							className={`header--nav_icon ${openMenu ? "header--nav_icon-open" : "header--nav_icon-close"}`}
							onClick={() => setOpenMenu((prevState) => !prevState)}
						>
							<div></div>
						</div>
					)}

					{isDesktop ? (
						<ul className="header--nav_menu">
							<MenuItems items={menuItems} />
						</ul>
					) : (
						<ul
							className={`header--nav_menu header--nav_menu-mobile ${
								openMenu ? "header--nav_menu-open" : "header--nav_menu-close"
							}`}
						>
							<MenuItems items={menuItems} />
						</ul>
					)}
				</nav>
			</header>
		</>
	);
}

export { Header };
