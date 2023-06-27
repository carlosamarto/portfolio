import "./Header.css";
import { Button } from "../../Components/";

function Header({ isHeaderVisible, prevScrollPos, isDesktop, openMenu, setOpenMenu, menuLinks, data }) {
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
						{data.menu.map((item, index) => (
							<li className="menu__item menu__item--fade-down" key={index}>
								<a className="menu__link" href={menuLinks[index].link}>
									<span className="menu__number">{index <= 9 ? `0${index + 1}` : index + 1}.</span>
									<span className="menu__text">{item.text}</span>
								</a>
							</li>
						))}

						<li className="menu__item menu__item--fade-down">
							<Button link={data.linkButton} size="small" text={data.textButton} />
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}

export { Header };
