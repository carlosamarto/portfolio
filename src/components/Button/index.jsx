import "./Button.css";

function Button({ text }) {
	return (
		<>
			<div>
				<button class="button">
					<span class="button--inner">
						<span class="button--inner_slide"></span>
						<span class="button--inner_content">{text}</span>
					</span>
				</button>
			</div>
		</>
	);
}

export { Button };
