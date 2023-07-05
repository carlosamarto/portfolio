import "./Content.css";
import { useContext } from "react";
import { Context } from "../../Context";

function Content({ children }) {
	// Use Context
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
