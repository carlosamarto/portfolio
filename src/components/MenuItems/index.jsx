import "./MenuItems.css";

function MenuItems({ items }) {
	return (
		<>
			{items.map((item) => (
				<li key={item.name}>
					<a href={`#${item.name}`}>
						<span>{item.id}.</span> {item.title}
					</a>
				</li>
			))}
		</>
	);
}

export { MenuItems };
