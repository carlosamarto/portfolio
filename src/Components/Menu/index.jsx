import "./Menu.css";
import { useContext } from "react";
import { Context } from "../../Context";
import { Button } from "../Button";
import { MenuItem } from "../MenuItem";

function Menu() {
	// Accessing values from the context using useContext hook
	const { isAnimationFinished, data } = useContext(Context);

	//Render UI Component
	return (
		<>
			<ul className={`menu ${isAnimationFinished ? "menu--animation-done" : "menu--animation-start"}`}>
				{data.header.menuItems.map((item) => (
					<MenuItem
						key={item.menuNumber}
						menuLink={item.menuLink}
						menuNumber={item.menuNumber}
						menuText={item.menuText}
					/>
				))}

				<li className="menu__button">
					<Button link={data.header.buttonLink} text={data.header.buttonText} external />
				</li>
			</ul>
		</>
	);
}

export { Menu };
