import "./Header.css";

function Header({ isDesktop, openMenu, setOpenMenu, isHeaderVisible, prevScrollPos, navMenuItems }) {
	const Logo = ({ width, height }) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			width={width}
			zoomAndPan="magnify"
			viewBox="0 0 375 374.999991"
			height={height}
			preserveAspectRatio="xMidYMid meet"
			version="1.0"
			role="img"
		>
			<title>Logo</title>
			<defs>
				<g />
				<clipPath id="dcf7cfa313">
					<path d="M 187.5 0 L 375 187.5 L 187.5 375 L 0 187.5 L 187.5 0 " clipRule="nonzero" />
				</clipPath>
				<clipPath id="b005f553bd">
					<path
						d="M 38.867188 38.867188 L 336.132812 38.867188 L 336.132812 336.132812 L 38.867188 336.132812 Z M 38.867188 38.867188 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="e9b91b5b41">
					<path
						d="M 187.5 38.867188 L 336.132812 187.5 L 187.5 336.132812 L 38.867188 187.5 L 187.5 38.867188 "
						clipRule="nonzero"
					/>
				</clipPath>
			</defs>
			<g clipPath="url(#dcf7cfa313)">
				<rect x="-37.5" width="450" fill="#ef233c" y="-37.499999" height="449.999989" fillOpacity="1" />
			</g>
			<g clipPath="url(#b005f553bd)">
				<g clipPath="url(#e9b91b5b41)">
					<path
						fill="#2b2d42"
						d="M 38.867188 38.867188 L 336.132812 38.867188 L 336.132812 336.132812 L 38.867188 336.132812 Z M 38.867188 38.867188 "
						fillOpacity="1"
						fillRule="nonzero"
					/>
				</g>
			</g>
			<g fill="#ef233c" fillOpacity="1">
				<g transform="translate(133.863276, 242.999984)">
					<g>
						<path d="M 101.921875 -38.828125 C 101.015625 -26.285156 96.382812 -16.410156 88.03125 -9.203125 C 79.675781 -2.003906 68.664062 1.59375 55 1.59375 C 40.050781 1.59375 28.296875 -3.429688 19.734375 -13.484375 C 11.171875 -23.546875 6.890625 -37.359375 6.890625 -54.921875 L 6.890625 -62.046875 C 6.890625 -73.253906 8.863281 -83.128906 12.8125 -91.671875 C 16.757812 -100.210938 22.398438 -106.765625 29.734375 -111.328125 C 37.078125 -115.890625 45.609375 -118.171875 55.328125 -118.171875 C 68.773438 -118.171875 79.609375 -114.566406 87.828125 -107.359375 C 96.046875 -100.160156 100.796875 -90.046875 102.078125 -77.015625 L 78.0625 -77.015625 C 77.476562 -84.546875 75.382812 -90.003906 71.78125 -93.390625 C 68.175781 -96.785156 62.691406 -98.484375 55.328125 -98.484375 C 47.316406 -98.484375 41.320312 -95.613281 37.34375 -89.875 C 33.375 -84.132812 31.332031 -75.234375 31.21875 -63.171875 L 31.21875 -54.359375 C 31.21875 -41.765625 33.125 -32.554688 36.9375 -26.734375 C 40.757812 -20.921875 46.78125 -18.015625 55 -18.015625 C 62.414062 -18.015625 67.953125 -19.707031 71.609375 -23.09375 C 75.265625 -26.488281 77.363281 -31.734375 77.90625 -38.828125 Z M 101.921875 -38.828125 " />
					</g>
				</g>
			</g>
		</svg>
	);

	const NavMenuItems = ({ items }) => (
		<>
			{items.map((item) => (
				<li key={item.name}>
					<a href={`#${item.name}`}>
						<span>{item.id}.</span> {item.title}
					</a>
				</li>
			))}
		</>
	);

	return (
		<>
			<header className={`header ${isHeaderVisible ? "show" : "hide"}`}>
				<nav className={`header--nav ${prevScrollPos > 0 ? "header--shadow" : "header--initial"}`}>
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
							<NavMenuItems items={navMenuItems} />
						</ul>
					) : (
						<ul
							className={`header--nav_menu header--nav_menu-mobile ${
								openMenu ? "header--nav_menu-open" : "header--nav_menu-close"
							}`}
						>
							<NavMenuItems items={navMenuItems} />
						</ul>
					)}
				</nav>
			</header>
		</>
	);
}

export { Header };
