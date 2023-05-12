import "./Header.css";
import { Logo } from "../../assets/Logo";

function Header({ initialScroll, scrollDirection, openMenu, setOpenMenu, isDesktop }) {
	return (
		<>
			<header
				id={initialScroll ? "initial" : "header"}
				className={`header ${scrollDirection === "down" ? "hide" : "show"}`}
			>
				<div>
					<Logo width="48" height="48" />
				</div>

				{!isDesktop && (
					<div
						className={`header--icon ${openMenu && "header--open"}`}
						onClick={() => setOpenMenu((prevState) => !prevState)}
					>
						<div></div>
					</div>
				)}


				{isDesktop ? (
					<ul className={`header--menu ${openMenu && "header--open"}`}>
						<li>
							<a href="#intro">
								<span>01.</span> Intro
							</a>
						</li>

						<li>
							<a href="#about">
								<span>02.</span> About
							</a>
						</li>

						<li>
							<a href="#featured">
								<span>03.</span> Featured
							</a>
						</li>

						<li>
							<a href="#projects">
								<span>04.</span> Projects
							</a>
						</li>

						<li>
							<a href="#contact">
								<span>05.</span> Contact
							</a>
						</li>
					</ul>
				) : (
					<ul className={`header--menu ${openMenu && "header--open"}`}>
						<li>
							<a href="#intro">
								<span>01.</span> Intro
							</a>
						</li>

						<li>
							<a href="#about">
								<span>02.</span> About
							</a>
						</li>

						<li>
							<a href="#featured">
								<span>03.</span> Featured
							</a>
						</li>

						<li>
							<a href="#projects">
								<span>04.</span> Projects
							</a>
						</li>

						<li>
							<a href="#contact">
								<span>05.</span> Contact
							</a>
						</li>
					</ul>
				)}
			</header>
		</>
	);
}

export { Header };
