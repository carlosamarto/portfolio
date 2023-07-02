import { useState, useEffect } from "react";

const useLoadingContent = () => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 3000);

		return () => clearTimeout(timer);
	}, []);

	return isLoading;
};

export { useLoadingContent };
