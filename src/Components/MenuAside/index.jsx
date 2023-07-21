import "./MenuAside.css";
import { useContext } from "react";
import { Context } from "../../Context";
import { Button } from "../Button";
import { MenuItem } from "../MenuItem";

function MenuAside() {
	// Accessing values from the context using useContext hook
	const { openMenu, data } = useContext(Context);

	//Render UI Component
	return (
		<>
			<aside className={`menu-aside ${openMenu ? "menu-aside--open" : "menu-aside--close"}`} aria-hidden="true">
				<nav className="menu-aside__nav">
					<ul className="menu-aside__menu">
						{data.header.menuItems.map((item) => (
							<MenuItem
								key={item.menuNumber}
								menuLink={item.menuLink}
								menuNumber={item.menuNumber}
								menuText={item.menuText}
							/>
						))}

						<li className="menu-aside__button">
							<Button link={data.header.buttonLink} text={data.header.buttonText} external />
						</li>
					</ul>
				</nav>
			</aside>
		</>
	);
}

export { MenuAside };
