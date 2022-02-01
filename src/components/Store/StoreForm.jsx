import React, { useState } from "react";
import "../../assets/bootstrap.css";

import Button from "../UI/Button/Button";

import FormInput from "../UI/FormInput/FormInput";

const StoreFormWrapper = (props) => {
	return (
		<div className="row mt-4">
			<div className="col">
				<div className="container-fluid">{props.children}</div>
			</div>
		</div>
	);
};

const StoreForm = () => {
	const [inputValue, setInputValue] = useState("");
	const [formSubmitted, setFormSubmitted] = useState(false);

	const submitClickHandler = (event) => {
		setInputValue("Nothing you entered matters :)");
		setFormSubmitted(true);
	};

	const resetClickHandler = (event) => {
		setInputValue("");
		setFormSubmitted(false);
	};

	return (
		<StoreFormWrapper>
			<div className="row">
				<div className="col-sm">
					<FormInput
						value={inputValue}
						type="email"
						id="email"
						placeholder="example@anotherExample.com"
					>
						Please enter you email
					</FormInput>
				</div>
				<div className="col-sm">
					<FormInput
						value={inputValue}
						type="text"
						id="username"
						placeholder="JGCardelus"
					>
						Please enter your username
					</FormInput>
				</div>
			</div>

			<div className="row">
				<div className="col-sm">
					<FormInput
						value={inputValue}
						type="text"
						id="useless-comments"
						placeholder="This page sucks man!"
					>
						Please enter comments that we'll never read
					</FormInput>
				</div>
				<div className="col-sm">
					<FormInput
						value={inputValue}
						type="text"
						id="random-input"
						placeholder="Random"
					>
						This is a random input
					</FormInput>
				</div>
			</div>
			<div className="row justify-content-end">
				<div className="col-auto">
					<Button type="btn-primary" onClick={submitClickHandler}>
						Submit or something
					</Button>
				</div>
				{formSubmitted && (
					<div className="col-auto">
						<Button
							type="btn-secondary"
							onClick={resetClickHandler}
						>
							Close alert & Reset
						</Button>
					</div>
				)}
			</div>

			{formSubmitted && (
				<div className="row mt-4">
					<div className="col">
						<div className="alert alert-success" role="alert">
							You entered those details for nothing!
						</div>
					</div>
				</div>
			)}
		</StoreFormWrapper>
	);
};

export default StoreForm;
