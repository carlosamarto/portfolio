import "./MenuAside.css";
import { useContext } from "react";
import { Context } from "../../Context";
import { Button } from "../Button";
import { MenuItem } from "../MenuItem";

function MenuAside() {
	// Use Context
	const { openMenu, data } = useContext(Context);

	//Render UI Component
	return (
		<>
			<aside className={`aside ${openMenu ? "aside--open" : "aside--close"}`} aria-hidden="true">
				<nav className="aside__nav">
					<ul className="aside__menu">
						{data.header.menuItems.map((item) => (
							<MenuItem
								key={item.menuNumber}
								menuLink={item.menuLink}
								menuNumber={item.menuNumber}
								menuText={item.menuText}
							/>
						))}

						<li className="aside__button">
							<Button link={data.header.buttonLink} text={data.header.buttonText} external />
						</li>
					</ul>
				</nav>
			</aside>
		</>
	);
}

export { MenuAside };
