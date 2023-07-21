import "./Introduction.css";
import { useContext } from "react";
import { Context } from "../../Context";
import { Button } from "../../Components";

function Introduction() {
	// Accessing values from the context using useContext hook
	const { isAnimationFinished, data } = useContext(Context);

	// Render UI Section
	return (
		<>
			<section
				id="introduction"
				className={`introduction ${
					isAnimationFinished ? "introduction--animation-done" : "introduction--animation-start"
				}`}
			>
				<h4 className="introduction__subtitle">{data.introduction.subtitle}</h4>

				<h1 className="introduction__title">{data.introduction.title}</h1>

				<p className="introduction__text" dangerouslySetInnerHTML={{ __html: data.introduction.text }} />

				<Button link={data.introduction.buttonLink} text={data.introduction.buttonText} />
			</section>
		</>
	);
}

export { Introduction };
