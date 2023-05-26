import "./App.css";
import { Intro } from "../Screens";
import { useState, useEffect } from "react";
import { Header, Layout, Footer } from "../Components";
import { useScreenSize, useHeaderScroll } from "../Hooks";

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
	const menuItems = [
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
				menuItems={menuItems}
			/>

			<Layout openMenu={openMenu}>
				<Intro />
			</Layout>

			<Footer />
		</>
	);
}

export { App };
