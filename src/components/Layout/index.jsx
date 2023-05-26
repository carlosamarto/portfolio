import "./Layout.css";

function Layout({ children, openMenu }) {
	return (
		<>
			<main className={`main ${openMenu ? "locked" : "unlocked"}`}>
				<article className="article">{children}</article>
			</main>
		</>
	);
}

export { Layout };
