import "./CustomTitle.css";
import PropTypes from "prop-types";

// Render UI Component
function CustomTitle({ number, customTitle }) {
	return (
		<>
			<div className="custom-title">
				<h2 className="custom-title__heading">
					<span className="custom-title__number">{number}</span>
					{customTitle}
				</h2>
			</div>
		</>
	);
}

CustomTitle.propTypes = {
	number: PropTypes.string.isRequired,
	customTitle: PropTypes.string.isRequired,
};

export { CustomTitle };
