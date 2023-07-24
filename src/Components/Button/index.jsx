import "./Button.css";
import PropTypes from "prop-types";

// Render UI Component
function Button({ link, external, text }) {
	return (
		<>
			<a
				href={link}
				target={external ? "_blank" : null}
				rel={external ? "noopener noreferrer" : null}
				className="button"
			>
				<span className="button__inner">
					<span className="button__content">{text}</span>
				</span>
			</a>
		</>
	);
}

Button.propTypes = {
	link: PropTypes.string.isRequired,
	external: PropTypes.bool,
	text: PropTypes.string.isRequired,
};

export { Button };
