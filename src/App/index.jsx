import "./App.css";
import { useChangeLang, useHeaderScroll, useLoadingContent, useOpenMenu } from "../Hooks";
import { Context } from "../Context";
import { Content, Footer, Header, Loader } from "../Layouts";
import { About, Contact, Intro, Projects } from "../Sections";
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

	// Render App
	return (
		<>
			{/* Context Provider */}
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
				{/* Conditional Rendering */}
				{isLoadingContent ? (
					// Render Loader component if isLoadingContent is true
					<Loader />
				) : (
					// Render the main content if isLoadingContent is false
					<>
						<Header />

						<Content>
							<Intro />

							<About />

							<Projects />

							<Contact />
						</Content>

						<Footer />
					</>
				)}
			</Context.Provider>
		</>
	);
}

export { App };
