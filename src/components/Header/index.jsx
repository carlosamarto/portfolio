import "./Header.css";
import { Logo } from "../Logo/Logo";

function Header({ scrollDirection, openMenu, setOpenMenu }) {
	return (
		<>
			<header className={`header ${scrollDirection === "down" ? "hide" : "show"}`}>
				<div>
					<Logo width="48" height="48" />
				</div>

				<div
					className={`header--icon ${openMenu && "header--open"}`}
					onClick={() => setOpenMenu((prevState) => !prevState)}
				>
					<div></div>
				</div>

				<ul className={`header--menu ${openMenu && "header--open"}`}>
					<li>
						<a href="#intro">Intro</a>
					</li>
					<li>
						<a href="#about">About</a>
					</li>
					<li>
						<a href="#featured">Featured</a>
					</li>
					<li>
						<a href="#projects">Projects</a>
					</li>
					<li>
						<a href="#contact">Contact</a>
					</li>
				</ul>
			</header>
		</>
	);
}

export { Header };
