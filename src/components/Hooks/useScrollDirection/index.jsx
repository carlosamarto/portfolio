import { useState, useEffect } from "react";

function useScrollDirection() {
	const [initialScroll, setInitialScroll] = useState(null);
	const [scrollDirection, setScrollDirection] = useState(null);

	useEffect(() => {
		let lastScrollY = window.pageYOffset;
		lastScrollY === 0 ? setInitialScroll(true) : setInitialScroll(false);

		// function to run on scroll
		const updateScrollDirection = () => {
			const scrollY = window.pageYOffset;

			const direction = scrollY > lastScrollY ? "down" : "up";

			if (direction !== scrollDirection) {
				setScrollDirection(direction);
			}

			if (scrollY === 0) {
				setInitialScroll(true);
			}

			lastScrollY = scrollY > 0 ? scrollY : 0;
		};

		window.addEventListener("scroll", updateScrollDirection); // add event listener

		return () => {
			window.removeEventListener("scroll", updateScrollDirection); // clean up
		};
	}, [scrollDirection, initialScroll]); // run when scroll direction changes

	return [scrollDirection, initialScroll];
}

export { useScrollDirection };
