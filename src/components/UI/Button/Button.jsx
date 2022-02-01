import React from "react";
import "../../../assets/bootstrap.css";

const Button = (props) => {
	const buttonClasses = `btn ${props.type !== undefined ? props.type : ""}`;
	return (
		<button type="button" onClick={props.onClick} className={buttonClasses}>
			{props.children}
		</button>
	);
};

export default Button;
