import "./Button.css";

function Button({ link, className, size, text }) {
	// Render UI Component
	return (
		<>
			<a href={link} className={`${className ? `button ${className}` : "button"} button--${size || "default"}`}>
				<span className="button__inner">
					<span className="button__slide" data-content="Link Hover" aria-hidden="true"></span>
					<span className="button__content">{text}</span>
				</span>
			</a>
		</>
	);
}

export { Button };
