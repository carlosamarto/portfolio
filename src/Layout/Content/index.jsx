import "./Content.css";

function Content({ children, openMenu }) {
	return (
		<>
			<main className={`content ${openMenu ? "content--locked" : "content--unlocked"}`}>
				<article className="article">{children}</article>
			</main>
		</>
	);
}

export { Content };
