import "./Title.css";

function Title({ number, title }) {
	return (
		<>
			<div className="title">
				<h2 className="title__heading">
					<span className="title__number">{number}</span>
					{title}
				</h2>

				<div className="title__line" data-content="Title Line" aria-hidden="true"></div>
			</div>
		</>
	);
}

export { Title };
