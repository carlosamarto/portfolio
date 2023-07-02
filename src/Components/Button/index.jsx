import "./Button.css";

function Button({ link, target, size, text }) {
	// Render UI Component
	return (
		<>
			{target ? (
				<a href={link} target="_blank" rel="noopener noreferrer" className={`button button--${size || "default"}`}>
					<span className="button__inner">
						<span className="button__slide" data-content="Link Hover" aria-hidden="true"></span>
						<span className="button__content">{text}</span>
					</span>
				</a>
			) : (
				<a href={link} className={`button button--${size || "default"}`}>
					<span className="button__inner">
						<span className="button__slide" data-content="Link Hover" aria-hidden="true"></span>
						<span className="button__content">{text}</span>
					</span>
				</a>
			)}
		</>
	);
}

export { Button };
