import "./Loader.css";
import { Logo } from "../../Components";

function Loader() {
	// Render UI Layout
	return (
		<>
			<div className="loader">
				<Logo width={136} height={136} />
			</div>
		</>
	);
}

export { Loader };
