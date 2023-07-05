import "./Menu.css";
import { useContext } from "react";
import { Context } from "../../Context";
import { Button } from "../Button";
import { MenuItem } from "../MenuItem";

function Menu() {
	// Use Context
	const { data } = useContext(Context);

	//Render UI Component
	return (
		<>
			<ul className="menu">
				{data.header.menuItems.map((item) => (
					<MenuItem
						key={item.menuNumber}
						menuLink={item.menuLink}
						menuNumber={item.menuNumber}
						menuText={item.menuText}
					/>
				))}

				<li className="menu__button">
					<Button link={data.header.buttonLink} target size="small" text={data.header.buttonText} />
				</li>
			</ul>
		</>
	);
}

export { Menu };
