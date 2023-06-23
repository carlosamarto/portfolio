import "./Header.css";
import { Button } from "../../Components/";

function Header({ isHeaderVisible, prevScrollPos, isDesktop, openMenu, setOpenMenu, headerContent }) {
	return (
		<>
			<header className={`header ${isHeaderVisible ? "header--show" : "header--hide"}`}>
				<nav className={`${prevScrollPos > 0 ? "nav nav--overlay" : "nav"}`}>
					<a href="/" className="logo logo--fade-down">
						C
					</a>

					{!isDesktop && (
						<div
							className={`${openMenu ? "hamburger hamburger--animate" : "hamburger"} hamburger--fade-down`}
							onClick={() => setOpenMenu((prevState) => !prevState)}
						>
							<div className="hamburger__inner"></div>
						</div>
					)}

					<ul className={`${openMenu ? "menu menu--mobile" : "menu"}`}>
						{headerContent.menu.map((menuItem) => (
							<li className="menu__item menu__item--fade-down" key={menuItem.name}>
								<a className="menu__link" href={`#${menuItem.name}`}>
									<span className="menu__number">{menuItem.id}.</span>
									<span className="menu__text">{menuItem.title}</span>
								</a>
							</li>
						))}

						<li className="menu__item menu__item--fade-down">
							<Button link={headerContent.link} size="small" text={headerContent.button} />
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}

export { Header };
