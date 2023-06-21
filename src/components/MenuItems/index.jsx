import "./MenuItems.css";

import { Button } from "../Button";

function MenuItems({ className, headerContent }) {
	return (
		<>
			{headerContent.map((menuItem) => (
				<li className={`${className ? `menu__item ${className}` : "menu__item"}`} key={menuItem.name}>
					{menuItem.name === "menu__button" ? (
						<Button size="small" text={menuItem.title} />
					) : (
						<a className="item" href={`#${menuItem.name}`}>
							<span className="item__number">{menuItem.id}.</span>
							<span className="item__title">{menuItem.title}</span>
						</a>
					)}
				</li>
			))}
		</>
	);
}

export { MenuItems };
