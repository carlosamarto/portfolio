import "./Loader.css";
import { Logo } from "../../Components";

// Render UI Layout
function Loader() {
	return (
		<>
			<div className="loader">
				<Logo width={144} height={144} />
			</div>
		</>
	);
}

export { Loader };
