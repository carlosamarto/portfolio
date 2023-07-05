import "./MenuItem.css";

function MenuItem({ menuLink, menuNumber, menuText }) {
	// Render UI Component
	return (
		<>
			<li className="menu-item">
				<a className="menu-item__link" href={menuLink}>
					<span className="menu-item__number">{menuNumber}</span>
					<span className="menu-item__text">{menuText}</span>
				</a>
			</li>
		</>
	);
}

export { MenuItem };
