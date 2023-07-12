import "./MenuIcon.css";
import { useContext } from "react";
import { Context } from "../../Context";

function MenuIcon() {
	// Accessing values from the context using useContext hook
	const { isAnimationFinished, openMenu, setOpenMenu } = useContext(Context);

	// Render UI Component
	return (
		<>
			<button
				type="button"
				className={`menu-icon ${isAnimationFinished ? "menu-icon--animation-done" : "menu-icon--animation-start"}`}
				aria-label="Menu Icon"
			>
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
