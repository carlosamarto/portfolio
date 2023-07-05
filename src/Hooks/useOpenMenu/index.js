import { useState, useEffect } from "react";

const useOpenMenu = () => {
	// Controls the open/close state of the menu
	const [openMenu, setOpenMenu] = useState(false);

	useEffect(() => {
		// Toggle body class to lock/unlock scrolling when openMenu changes
		document.body.classList.toggle("body--lock", openMenu);

		const handleScreenSize = () => {
			// Define your width threshold to consider it as desktop size
			const isDesktop = window.innerWidth > 1024;

			// If the screen size is desktop set openMenu to false
			if (isDesktop) {
				setOpenMenu(false);
			}
		};

		// Add resize event listener
		window.addEventListener("resize", handleScreenSize);

		// Clean up the event listener when the component is unmounted
		return () => {
			window.removeEventListener("resize", handleScreenSize);
		};
	}, [openMenu]);

	return [openMenu, setOpenMenu];
};

export { useOpenMenu };
