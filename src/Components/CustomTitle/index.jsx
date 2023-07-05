import "./CustomTitle.css";

function CustomTitle({ number, customTitle }) {
	// Render UI Component
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

export { CustomTitle };
