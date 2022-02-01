import React from "react";

const Code = (props) => {
	return (
		<div>
			{props.lines.map((line) => {
				return (
					<React.Fragment>
						<code>{line}</code>
						<br />
					</React.Fragment>
				);
			})}
		</div>
	);
};

export default Code;
