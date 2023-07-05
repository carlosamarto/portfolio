import "./App.css";
import { useChangeLang, useHeaderScroll, useLoadingContent, useOpenMenu } from "../Hooks";
import { Context } from "../Context";
import { Content, Footer, Header, Loader } from "../Layouts";
import { Intro, About, Projects, Contact } from "../Sections";
import { content } from "../Mocks";

function App() {
	// Toggles between language options
	const [lang, toggleLang] = useChangeLang("LANG_V1", "en");

	// Tracks header visibility and previous scroll position
	const [isHeaderVisible, prevScrollPos] = useHeaderScroll();

	// Validate the state for load the content
	const isLoadingContent = useLoadingContent();

	// Controls the open/close state of the menu
	const [openMenu, setOpenMenu] = useOpenMenu();

	// Selects the content data based on the current language
	const data = lang === "en" ? content.english : content.spanish;

	// Render app with props
	return (
		<>
			<Context.Provider
				value={{
					lang,
					toggleLang,
					isHeaderVisible,
					prevScrollPos,
					openMenu,
					setOpenMenu,
					data,
				}}
			>
				{isLoadingContent ? (
					<Loader />
				) : (
					<>
						<Header />

						<Content>
							<Intro data={data.intro} />

							<About data={data.about} />

							<Projects data={data.projects} />

							<Contact data={data.contact} />
						</Content>

						<Footer lang={lang} toggleLang={toggleLang} openMenu={openMenu} data={data.footer} />
					</>
				)}
			</Context.Provider>
		</>
	);
}

export { App };
