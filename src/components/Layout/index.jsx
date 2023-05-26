import "./Layout.css";

function Layout({ children, openMenu }) {
	return (
		<>
			<main className={`main ${openMenu ? "main--locked" : "main--unlocked"}`}>
				<article className="main--article">{children}</article>
			</main>
		</>
	);
}

export { Layout };
