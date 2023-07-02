import "./Item.css";

function Item({ link, number, text }) {
	return (
		<>
			<li className="item">
				<a className="item__link" href={link}>
					<span className="item__number">{number}</span>
					<span className="item__text">{text}</span>
				</a>
			</li>
		</>
	);
}

export { Item };
