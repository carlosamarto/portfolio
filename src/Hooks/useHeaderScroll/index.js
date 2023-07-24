import { useState, useEffect } from "react";

// Custom hook
const useHeaderScroll = () => {
	// Header Visible - Store Visibility
	const [isHeaderVisible, setIsHeaderVisible] = useState(true);

	// Previous Scroll - Previous Scroll Position
	const [prevScrollPos, setPrevScrollPos] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			// Get the current scroll position
			const currentScrollPos = window.pageYOffset;

			if (currentScrollPos <= 32) {
				// Checks if the current scroll position is less than or equal to 32
				setIsHeaderVisible(true);
			} else if (prevScrollPos < currentScrollPos && isHeaderVisible) {
				// If scrolling down and header is currently visible, hide the header
				setIsHeaderVisible(false);
			} else if (prevScrollPos > currentScrollPos && !isHeaderVisible) {
				// If scrolling up and header is currently hidden, show the header
				setIsHeaderVisible(true);
			}

			// Update the previous scroll position
			setPrevScrollPos(currentScrollPos);
		};

		// Add scroll event listener
		window.addEventListener("scroll", handleScroll);

		// Clean up the event listener on component unmount
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [isHeaderVisible, prevScrollPos]);

	return [isHeaderVisible, prevScrollPos];
};

export { useHeaderScroll };
