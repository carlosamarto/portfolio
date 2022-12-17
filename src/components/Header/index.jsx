import "./Header.css";

function Header() {
	return (
		<>
			<header className="portfolio--header">
				<img src="./Logo.svg" alt="Carlos Martínez Logo" className="portfolio--header-logo" />

				<ul className="portfolio--header-menu">
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
