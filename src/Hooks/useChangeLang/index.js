import { useState, useEffect } from "react";

// Custom hook
const useChangeLang = ({ key, initialValue }) => {
	const [lang, setLang] = useState(() => {
		// Get the stored value from localStorage
		const storedValue = localStorage.getItem(key);

		// Use the stored value or the initial value
		return storedValue !== null ? storedValue : initialValue;
	});

	useEffect(() => {
		// Set the lang attribute of the document
		document.documentElement.lang = lang;

		// Store the language value in localStorage
		localStorage.setItem(key, lang);
	}, [key, lang]);

	// Toggle language function
	const toggleLang = (value) => {
		setLang(value);
	};

	return [lang, toggleLang];
};

export { useChangeLang };
