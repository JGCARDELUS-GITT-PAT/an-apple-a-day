import React from "react";

const FormInput = React.forwardRef((props, ref) => {
	return (
		<div className="form-floating mb-3">
			<input
				value={props.value}
				ref={ref}
				type={props.type}
				className="form-control"
				id={props.id}
				placeholder={props.placeholder}
			/>
			<label htmlFor={props.id}>{props.children}</label>
		</div>
	);
});

export default FormInput;
