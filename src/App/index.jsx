import "./App.css";
import { useState, useEffect } from "react";
import { useScreenSize } from "../Hooks/useScreenSize";
import { useHeaderScroll } from "../Hooks/useHeaderScroll";
import { Header, Layout, Intro, About, Footer } from "../Components";

function App() {
	// Screen Size - Validate Desktop
	const isDesktop = useScreenSize();

	// Header Menu - Open or Close
	const [openMenu, setOpenMenu] = useState(false);

	// Header Scroll - Visible Header
	const [isHeaderVisible, prevScrollPos] = useHeaderScroll();

	// Header Menu - Lock or Unlock
	useEffect(() => {
		document.body.classList.toggle("locked", openMenu);
	}, [openMenu]);

	// Menu Items - Items
	const navMenuItems = [
		{ id: "01", title: "Intro", name: "intro" },
		{ id: "02", title: "About", name: "about" },
		{ id: "03", title: "Experience", name: "experience" },
		{ id: "04", title: "Projects", name: "projects" },
		{ id: "05", title: "Contact", name: "contact" },
	];

	return (
		<>
			<Header
				isDesktop={isDesktop}
				openMenu={openMenu}
				setOpenMenu={setOpenMenu}
				isHeaderVisible={isHeaderVisible}
				prevScrollPos={prevScrollPos}
				navMenuItems={navMenuItems}
			/>

			<Layout openMenu={openMenu}>
				<Intro />
				<About />
			</Layout>

			<Footer />
		</>
	);
}

export { App };
