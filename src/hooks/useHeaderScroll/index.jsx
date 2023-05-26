import { useState, useEffect } from "react";

const useHeaderScroll = () => {
	// Header Visible - Store Visibility
	const [isHeaderVisible, setIsHeaderVisible] = useState(true);

	// Previous Scroll - Value
	const [prevScrollPos, setPrevScrollPos] = useState(0);

	// Scroll Events - Update Header
	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPos = window.pageYOffset;

			if (currentScrollPos === 0) {
				setIsHeaderVisible(true);
			} else if (prevScrollPos < currentScrollPos && isHeaderVisible) {
				setIsHeaderVisible(false);
			} else if (prevScrollPos > currentScrollPos && !isHeaderVisible) {
				setIsHeaderVisible(true);
			}

			setPrevScrollPos(currentScrollPos);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [isHeaderVisible, prevScrollPos]);

	return [isHeaderVisible, prevScrollPos];
};

export { useHeaderScroll };
