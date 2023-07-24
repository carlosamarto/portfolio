import { useState, useEffect, useRef } from "react";

// Custom hook
const useSectionAnimation = () => {
	const [isVisible, setIsVisible] = useState(false);

	const sectionRef = useRef(null);

	const current = sectionRef.current;

	useEffect(() => {
		// Create an Intersection Observer to track visibility of the section
		const sectionObserver = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setIsVisible(true);
						sectionObserver.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.2 } // Adjust this threshold to control when the animation triggers
		);

		// Observe the section when the component is mounted
		if (sectionRef.current) {
			sectionObserver.observe(sectionRef.current);
		}

		// Cleanup the observer when the component is unmounted
		return () => {
			if (current) {
				sectionObserver.unobserve(current);
			}
		};
	}, [current]);

	return { isVisible, sectionRef };
};

export { useSectionAnimation };
