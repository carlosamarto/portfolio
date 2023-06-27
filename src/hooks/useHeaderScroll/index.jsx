import { useState, useEffect } from "react";

function useHeaderScroll() {
	// Store header visibility
	const [isHeaderVisible, setIsHeaderVisible] = useState(true);

	// Store previous scroll position
	const [prevScrollPos, setPrevScrollPos] = useState(0);

	// Update header visibility
	useEffect(() => {
		// Handle scroll events
		const handleScroll = () => {
			const currentScrollPos = window.pageYOffset;

			// Check if at the top of the page
			if (currentScrollPos === 0) {
				setIsHeaderVisible(true);
			}
			// Scrolling down & header is visible
			else if (prevScrollPos < currentScrollPos && isHeaderVisible) {
				setIsHeaderVisible(false);
			}
			// Scrolling up & header is not visible
			else if (prevScrollPos > currentScrollPos && !isHeaderVisible) {
				setIsHeaderVisible(true);
			}

			// Update the previous scroll position
			setPrevScrollPos(currentScrollPos);
		};

		// Add scroll event listener
		window.addEventListener("scroll", handleScroll);

		// Cleanup to remove scroll event listener
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [isHeaderVisible, prevScrollPos]);

	return [isHeaderVisible, prevScrollPos];
}

export { useHeaderScroll };
