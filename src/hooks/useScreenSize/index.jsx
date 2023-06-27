import { useState, useEffect } from "react";

function useScreenSize() {
	// Store desktop screen size
	const [isDesktop, setIsDesktop] = useState(window.matchMedia("(min-width: 768px)").matches);

	// Window size
	useEffect(() => {
		// Desktop screen size
		const screenSize = window.matchMedia("(min-width: 768px)");

		// Handle changes in the screen size
		const handleScreenSizeChange = (e) => setIsDesktop(e.matches);

		// Add a listener for changes
		screenSize.addListener(handleScreenSizeChange);

		// Remove the listener
		return () => screenSize.removeListener(handleScreenSizeChange);
	}, []);

	return isDesktop;
}

export { useScreenSize };
