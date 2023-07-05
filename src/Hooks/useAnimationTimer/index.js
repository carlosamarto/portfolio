import { useState, useEffect } from "react";

// Custom hook to return `true` after 5.5 seconds and `false` before that time.
const useAnimationTimer = () => {
	// State to hold the timer status
	const [isAnimationFinished, setIsAnimationFinished] = useState(false);

	useEffect(() => {
		// Create a timer that sets `isTimerFinished` to `true` after 5.5 seconds (5500 milliseconds)
		const timer = setTimeout(() => {
			setIsAnimationFinished(true);
		}, 5500);

		// Clear the timer when the component is unmounted or the dependency array changes.
		return () => clearTimeout(timer);
	}, []);

	// Return the current state of the timer.
	return isAnimationFinished;
};

export { useAnimationTimer };
