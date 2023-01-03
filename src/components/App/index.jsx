import "./App.css";
import { useState, useEffect } from "react";
import { useScrollDirection } from "../Hooks/useScrollDirection";
import { Header, Intro, About, Featured, Projects, Contact, Main, Footer } from "../";

function App() {
	const scrollDirection = useScrollDirection();
	const [openMenu, setOpenMenu] = useState(false);

	useEffect(() => {
		document.body.classList.toggle("block", openMenu);
	}, [openMenu]);

	return (
		<>
			<Header scrollDirection={scrollDirection} openMenu={openMenu} setOpenMenu={setOpenMenu} />

			<Main openMenu={openMenu}>
				<Intro />
				<About />
				<Featured />
				<Projects />
				<Contact />
			</Main>

			<Footer />
		</>
	);
}

export { App };
