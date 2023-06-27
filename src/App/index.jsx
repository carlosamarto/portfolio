import "./App.css";
import { useHeaderScroll, useLoadingContent, useOpenMenu, useScreenSize, useToggleLang } from "../Hooks";
import { Content, Footer, Header, Loader } from "../Layout";
import { Intro, About } from "../Sections";
import { appContent } from "../Mocks";
import { useEffect, useRef, useState } from "react";

function App() {
	// Visible header on scroll
	const [isHeaderVisible, prevScrollPos] = useHeaderScroll();

	// Validate loading state
	const isLoadingContent = useLoadingContent();

	// Open / Close menu
	const [openMenu, setOpenMenu] = useOpenMenu();

	// Validate desktop screen
	const isDesktop = useScreenSize();

	// Change website language
	const [lang, toggleLang] = useToggleLang("LANG_V1", "en");

	// Set content language
	const data = lang === "en" ? appContent.english : appContent.spanish;

	const sectionRef = useRef(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY + window.innerHeight;
			const sectionPosition = sectionRef.current.offsetTop;

			if (scrollPosition > sectionPosition) {
				setIsVisible(true);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			{isLoadingContent ? (
				<Loader />
			) : (
				<>
					<Header
						isHeaderVisible={isHeaderVisible}
						prevScrollPos={prevScrollPos}
						isDesktop={isDesktop}
						openMenu={openMenu}
						setOpenMenu={setOpenMenu}
						menuLinks={appContent.menuLinks}
						data={data.header}
					/>

					<Content openMenu={openMenu}>
						<Intro titleName={appContent.titleName} linkButton={appContent.menuLinks[3].link} data={data.intro} />

						<About
							profileImage={appContent.profileImage}
							skills={appContent.skills}
							isVisible={isVisible}
							sectionRef={sectionRef}
							data={data.about}
						/>
					</Content>

					<Footer
						openMenu={openMenu}
						lang={lang}
						toggleLang={toggleLang}
						social={appContent.social}
						portfolioLink={appContent.portfolioLink}
						data={data.footer}
					/>
				</>
			)}
		</>
	);
}

export { App };
