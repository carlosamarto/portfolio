import "./App.css";
import { useState } from "react";
import { useScrollDirection } from "../Hooks/useScrollDirection";
import { Header, Intro, About, Featured, Projects, Contact, Main, Footer } from "../";

function App() {
	const scrollDirection = useScrollDirection();
	const [openMenu, setOpenMenu] = useState(false);

	return (
		<>
			<Header scrollDirection={scrollDirection} openMenu={openMenu} setOpenMenu={setOpenMenu} />

			<Main>
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
