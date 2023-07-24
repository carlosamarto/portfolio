import PropTypes from "prop-types";

// Render UI Component
function Logo({ width, height }) {
	return (
		<>
			<svg
				className="logo"
				width={width}
				height={height}
				viewBox="0 0 68 68"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect
					className="logo__background"
					x="0.0588379"
					y="34"
					width="48"
					height="48"
					transform="rotate(-45 0.0588379 34)"
					fill="#2B2D42"
				/>
				<rect
					className="logo__stroke"
					x="1.47305"
					y="34"
					width="46"
					height="46"
					transform="rotate(-45 1.47305 34)"
					stroke="#EF233C"
					strokeWidth="2"
				/>
				<path
					className="logo__letter"
					d="M35.456 22.472C36.9493 22.472 38.208 22.6693 39.232 23.064C40.2667 23.448 41.2267 24.0027 42.112 24.728L40.176 27.032C39.5147 26.4773 38.8053 26.0667 38.048 25.8C37.2907 25.5333 36.4853 25.4 35.632 25.4C34.5333 25.4 33.52 25.6773 32.592 26.232C31.664 26.7867 30.9173 27.688 30.352 28.936C29.7973 30.184 29.52 31.848 29.52 33.928C29.52 35.9653 29.7867 37.608 30.32 38.856C30.8533 40.104 31.584 41.0107 32.512 41.576C33.44 42.1413 34.48 42.424 35.632 42.424C36.816 42.424 37.7973 42.232 38.576 41.848C39.3547 41.4533 40.0427 41.0107 40.64 40.52L42.432 42.808C41.696 43.5227 40.7627 44.1413 39.632 44.664C38.5013 45.176 37.1253 45.432 35.504 45.432C33.6373 45.432 31.9573 44.9947 30.464 44.12C28.9813 43.2347 27.808 41.9387 26.944 40.232C26.0907 38.5253 25.664 36.424 25.664 33.928C25.664 31.4533 26.1067 29.368 26.992 27.672C27.8773 25.9653 29.0613 24.6747 30.544 23.8C32.0267 22.9147 33.664 22.472 35.456 22.472Z"
					fill="#EF233C"
				/>
			</svg>
		</>
	);
}

// Define prop types for the Logo layout
Logo.propTypes = {
	width: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
};

export { Logo };
