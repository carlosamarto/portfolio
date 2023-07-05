import "./Loader.css";
import { Logo } from "../../Components";

function Loader() {
	// Render UI Layout
	return (
		<>
			<div className="loader">
				<Logo width={144} height={144} />
			</div>
		</>
	);
}

export { Loader };
