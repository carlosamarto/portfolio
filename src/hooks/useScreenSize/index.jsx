import { useState, useEffect } from "react";

function useScreenSize() {
	// Min Width - Store Desktop
	const [isDesktop, setIsDesktop] = useState(window.matchMedia("(min-width: 768px)").matches);

	// Detect Changes - in Window Size
	useEffect(() => {
		const mediaQuery = window.matchMedia("(min-width: 768px)");
		const handleMediaQueryChange = (e) => setIsDesktop(e.matches);

		mediaQuery.addListener(handleMediaQueryChange);
		return () => mediaQuery.removeListener(handleMediaQueryChange);
	}, []);

	return isDesktop;
}

export { useScreenSize };
