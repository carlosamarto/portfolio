import "./Content.css";

function Content({ children, openMenu }) {
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
