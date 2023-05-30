import "./App.css";
import { useState, useEffect } from "react";
import { Header, Layout, Footer } from "../Components";
import { useScreenSize, useHeaderScroll } from "../Hooks";

function App() {
	// Screen Size - Validate Desktop Screen
	const isDesktop = useScreenSize();

	// Header Menu - Open or Close Menu
	const [openMenu, setOpenMenu] = useState(false);

	// Header Scroll - Visible Header on Scroll
	const [isHeaderVisible, prevScrollPos] = useHeaderScroll();

	// Header Menu - Lock or Unlock Content
	useEffect(() => {
		document.body.classList.toggle("locked", openMenu);
	}, [openMenu]);

	// Menu Items - Array of Items in the Nav
	const menuItems = [
		{ id: "01", title: "Intro", name: "intro" },
		{ id: "02", title: "About", name: "about" },
		{ id: "04", title: "Work", name: "work" },
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

			<Layout openMenu={openMenu}></Layout>

			<Footer />
		</>
	);
}

export { App };
