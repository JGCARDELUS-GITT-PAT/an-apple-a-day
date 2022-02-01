import React from "react";

import Card from "../UI/Card/Card";
import CardTitle from "../UI/Card/CardTitle";
import CardText from "../UI/Card/CardText";
import CardSubtitle from "../UI/Card/CardSubtitle";

import Lorem from "../UI/Lorem/Lorem";

import StoreForm from "./StoreForm";

const Introduction = () => {
	return (
		<div className="row">
			<div className="col">
				<Card>
					<CardTitle>About the form.</CardTitle>
					<CardText>
						Even though I'm learning React (which is heavily based
						on JS) we haven't learned how to do JS so the store
						is... in the making. However you can fill in this
						awesome form which doesn't do absolutely anything (or{" "}
						<strong>maybe it does</strong>)
					</CardText>
				</Card>
			</div>
		</div>
	);
};

const FormWrapper = () => {
	return (
		<div className="row mt-4">
			<div className="col">
				<Card>
					<CardTitle>That form.</CardTitle>
					<CardSubtitle>
						This is the useless form we talked about
					</CardSubtitle>
					<StoreForm />
				</Card>
			</div>
		</div>
	);
};

const Store = () => {
	return (
		<div className="container-fluid">
			<Introduction />
			<FormWrapper />
			<Lorem />
		</div>
	);
};

export default Store;
