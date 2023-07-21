import "./Main.css";
import { useContext } from "react";
import { Context } from "../../Context";

function Main({ children }) {
	// Accessing values from the context using useContext hook
	const { openMenu } = useContext(Context);

	//Render UI Layout
	return (
		<>
			<main className={`main ${openMenu ? "main--lock" : "main--unlock"}`}>
				<article className="article">{children}</article>
			</main>
		</>
	);
}

export { Main };
