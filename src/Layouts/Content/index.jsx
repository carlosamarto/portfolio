import "./Content.css";
import { useContext } from "react";
import { Context } from "../../Context";

function Content({ children }) {
	// Accessing values from the context using useContext hook
	const { openMenu } = useContext(Context);

	//Render UI Layout
	return (
		<>
			<main className={`content ${openMenu ? "content--lock" : "content--unlock"}`}>
				<article className="article">{children}</article>
			</main>
		</>
	);
}

export { Content };
