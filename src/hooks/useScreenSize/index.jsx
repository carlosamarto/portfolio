import { useState, useEffect } from "react";

function useScreenSize() {
	const [isDesktop, setIsDesktop] = useState(window.matchMedia("(min-width: 768px)").matches);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(min-width: 768px)");
		const handleMediaQueryChange = (e) => setIsDesktop(e.matches);

		mediaQuery.addListener(handleMediaQueryChange);
		return () => mediaQuery.removeListener(handleMediaQueryChange);
	}, []);

	return isDesktop;
}

export { useScreenSize };
