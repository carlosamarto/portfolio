import "./Main.css";
import { useContext } from "react";
import { Context } from "../../Context";
import PropTypes from "prop-types";

//Render UI Layout
function Main({ children }) {
	// Accessing values from the context using useContext hook
	const { openMenu } = useContext(Context);

	return (
		<>
			<main className={`main ${openMenu ? "main--lock" : "main--unlock"}`}>
				<article className="article">{children}</article>
			</main>
		</>
	);
}

// Define prop types for the Main layout
Main.propTypes = {
	children: PropTypes.node.isRequired,
};

export { Main };
