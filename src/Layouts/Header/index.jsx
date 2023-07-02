import "./Header.css";
import { Button, Item, Logo } from "../../Components";

function Header({ isHeaderVisible, prevScrollPos, openMenu, setOpenMenu, data }) {
	// Render UI Layout
	return (
		<>
			<header
				className={`header ${isHeaderVisible ? "header--show" : "header--hide"} ${
					prevScrollPos > 32 ? "header--active" : "header--inactive"
				}`}
			>
				<nav className="nav">
					<a href="/">
						<Logo width={48} height={48} />
					</a>

					<button aria-label="Menu" className="hamburger">
						<div
							className={`hamburger__menu ${openMenu ? "hamburger__menu--active" : "hamburger__menu--inactive"}`}
							onClick={() => setOpenMenu((prevState) => !prevState)}
						>
							<div className="hamburger__inner"></div>
						</div>
					</button>

					<aside aria-hidden="true" className={`aside ${openMenu ? "aside--open" : "aside--close"}`}>
						<nav className="aside__nav">
							<ul className="aside__menu">
								{data.menu.map((item) => (
									<Item key={item.number} link={item.link} number={item.number} text={item.text} />
								))}

								<li className="aside__button">
									<Button link={data.link} target size="small" text={data.button} />
								</li>
							</ul>
						</nav>
					</aside>

					<ul className="menu">
						{data.menu.map((item) => (
							<Item key={item.number} link={item.link} number={item.number} text={item.text} />
						))}

						<li className="menu__button">
							<Button link={data.link} target size="small" text={data.button} />
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}

export { Header };
