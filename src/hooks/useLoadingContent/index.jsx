import { useState, useEffect } from "react";

// Loading state of content
function useLoadingContent() {
	// Content is loading or not
	const [isLoadingContent, setIsLoadingContent] = useState(true);

	useEffect(() => {
		// Simulate loading duration
		let loadingDuration = setTimeout(() => {
			// Set to "false" after 3000 milliseconds (3 seconds)
			setIsLoadingContent(false);
		}, 3000);

		// Clean up function
		return () => clearTimeout(loadingDuration);
	}, []);

	// Return the loading state
	return isLoadingContent;
}

export { useLoadingContent };
