import { useState, useEffect } from "react";

const useLoadingContent = () => {
	// State variable to track the loading state of the content
	const [isLoadingContent, setIsLoadingContent] = useState(true);

	useEffect(() => {
		// Set a timer to update the loading state to false after 3 seconds (3000 milliseconds)
		const timer = setTimeout(() => {
			setIsLoadingContent(false);
		}, 3000);

		// Cleanup function to clear the timer when the component unmounts
		return () => clearTimeout(timer);
	}, []);

	// Return the loading state variable
	return isLoadingContent;
};

export { useLoadingContent };
