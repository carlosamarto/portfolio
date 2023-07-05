import "./Button.css";

function Button({ link, external, text }) {
	// Render UI Component
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

export { Button };
