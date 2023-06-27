import { useState, useEffect } from "react";

function useOpenMenu() {
	// Open / Close menu
	const [openMenu, setOpenMenu] = useState(false);

	useEffect(() => {
		// Lock / Unlock content
		document.body.classList.toggle("body--locked", openMenu);
	}, [openMenu]);

	return [openMenu, setOpenMenu];
}

export { useOpenMenu };
