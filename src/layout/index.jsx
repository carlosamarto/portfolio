import "./Layout.css";
import { useState, useEffect } from "react";
import { useScreenSize } from "../hooks/useScreenSize";
import { useScrollDirection } from "../hooks/useScrollDirection";
import { Header, Intro, About, Featured, Projects, Contact, Footer } from "../components";

function Layout() {
	const isDesktop = useScreenSize();
	const [scrollDirection, initialScroll] = useScrollDirection();
	const [openMenu, setOpenMenu] = useState(false);

	useEffect(() => {
		document.body.classList.toggle("locked", openMenu);
	}, [openMenu]);

	return (
		<>
			<Header
				scrollDirection={scrollDirection}
				initialScroll={initialScroll}
				openMenu={openMenu}
				setOpenMenu={setOpenMenu}
				isDesktop={isDesktop}
			/>

			<main className={`${openMenu && "locked"}`}>
				<Intro />
				<About />
				<Featured />
				<Projects />
				<Contact />
			</main>

			<Footer />
		</>
	);
}

export { Layout };
