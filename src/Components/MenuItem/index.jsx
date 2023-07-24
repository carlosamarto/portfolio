import "./MenuItem.css";
import PropTypes from "prop-types";

// Render UI Component
function MenuItem({ menuLink, menuNumber, menuText }) {
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

MenuItem.propTypes = {
	menuLink: PropTypes.string.isRequired,
	menuNumber: PropTypes.string.isRequired,
	menuText: PropTypes.string.isRequired,
};

export { MenuItem };
