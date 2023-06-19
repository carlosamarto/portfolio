import "./MenuItems.css";

import { Button } from "../Button";

function MenuItems({ headerContent }) {
	return (
		<>
			{headerContent.map((menuItem) => (
				<li className="menu__item menu__item--fade-down" key={menuItem.name}>
					{menuItem.name === "menu__button" ? (
						<Button text={menuItem.title} size="small" />
					) : (
						<a className="menu-link" href={`#${menuItem.name}`}>
							<span className="menu-link__number">{menuItem.id}.</span>
							<span className="menu-link__title">{menuItem.title}</span>
						</a>
					)}
				</li>
			))}
		</>
	);
}

export { MenuItems };
