import "./App.css";
import { useHeaderScroll, useScreenSize } from "../Hooks";
import { useState, useEffect } from "react";
import { Content, Footer, Header, Loader } from "../Layout";
import { header, footer } from "../Mocks/appContent";

function App() {
	// Header Scroll - Visible Header on Scroll
	const [isHeaderVisible, prevScrollPos] = useHeaderScroll();

	// Screen Size - Validate Desktop Screen
	const isDesktop = useScreenSize();

	// Loader - State to show or hide the Loader
	const [isLoading, setIsLoading] = useState(true);

	// Header Menu - Open or Close Menu
	const [openMenu, setOpenMenu] = useState(false);

	// App Content - Change Language
	const [toggleLang, setToggleLang] = useState(false);

	// useEffect
	useEffect(() => {
		// Header Menu - Lock or Unlock Content
		document.body.classList.toggle("body--locked", openMenu);

		// Loader - Timeout to finish the loader
		setTimeout(() => {
			setIsLoading(false);
		}, 3000);
	}, [openMenu]);

	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<>
					<Header
						isHeaderVisible={isHeaderVisible}
						prevScrollPos={prevScrollPos}
						isDesktop={isDesktop}
						openMenu={openMenu}
						setOpenMenu={setOpenMenu}
						headerContent={toggleLang ? header.contentEs : header.contentEn}
					/>

					<Content openMenu={openMenu}></Content>

					<Footer toggleLang={toggleLang} setToggleLang={setToggleLang} footerContent={toggleLang ? footer.contentEs : footer.contentEn} />
				</>
			)}
		</>
	);
}

export { App };