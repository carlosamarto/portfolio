import "./Button.css";

function Button({ text, size }) {
	return (
		<>
			<a className={`button button--${size || "default"}`}>
				<span className="button__inner">
					<span data-content="Link Hover" aria-hidden="true" className="button__slide"></span>
					<span className="button__content">{text}</span>
				</span>
			</a>
		</>
	);
}

export { Button };
