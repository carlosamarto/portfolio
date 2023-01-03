import "./Main.css";

function Main({ children, openMenu }) {
	return (
		<>
			<main className={`main ${openMenu && "inactive"}`}>{children}</main>
		</>
	);
}

export { Main };
