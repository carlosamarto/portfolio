import "./App.css";
import { useChangeLang, useHeaderScroll, useLoadingContent, useOpenMenu } from "../Hooks";
import { Content, Footer, Header, Loader } from "../Layouts";
import { Intro, About, Projects, Contact } from "../Sections";
import { content } from "../Mocks";

function App() {
	// Toggles between language options
	const [lang, toggleLang] = useChangeLang("LANG_V1", "en");

	// Tracks header visibility and previous scroll position
	const [isHeaderVisible, prevScrollPos] = useHeaderScroll();

	const isLoading = useLoadingContent();

	// Controls the open/close state of the menu
	const [openMenu, setOpenMenu] = useOpenMenu();

	// Selects the content data based on the current language
	const data = lang === "en" ? content.english : content.spanish;

	// Render app with props
	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<>
					<Header
						isHeaderVisible={isHeaderVisible}
						prevScrollPos={prevScrollPos}
						openMenu={openMenu}
						setOpenMenu={setOpenMenu}
						data={data.header}
					/>

					<Content openMenu={openMenu}>
						<Intro data={data.intro} />

						<About data={data.about} />

						<Projects data={data.projects} />

						<Contact data={data.contact} />
					</Content>

					<Footer lang={lang} toggleLang={toggleLang} openMenu={openMenu} data={data.footer} />
				</>
			)}
		</>
	);
}

export { App };
