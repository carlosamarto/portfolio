import "./MenuIcon.css";
import { useContext } from "react";
import { Context } from "../../Context";

function MenuIcon() {
	// Use Context
	const { openMenu, setOpenMenu } = useContext(Context);

	// Render UI Component
	return (
		<>
			<button className="menu-icon" aria-label="Menu Icon">
				<div
					className={`menu-icon__content ${openMenu ? "menu-icon__content--active" : "menu-icon__content--inactive"}`}
					onClick={() => setOpenMenu((prevState) => !prevState)}
				>
					<div className="menu-icon__inner"></div>
				</div>
			</button>
		</>
	);
}

export { MenuIcon };
