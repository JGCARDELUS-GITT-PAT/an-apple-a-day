import React from "react";

import Card from "../UI/Card/Card";
import CardTitle from "../UI/Card/CardTitle";
import CardText from "../UI/Card/CardText";

import Code from "../UI/Code/Code";
import Image from "../UI/Image/Image";

import Modal from "../UI/Modal/Modal";

import wubba from "../../assets/wubba.gif";

const Information = () => {
	const codeLines = [
		`<Accordion id="main-products">`,
		`	<AccordionItem title="iPhone" parentId="main-products">`,
		`		<p>Text</p>`,
		`	</AccordionItem>`,
		`	<AccordionItem title="iPad" parentId="main-products">`,
		`		<p>Text</p>`,
		`	</AccordionItem>`,
		`</Accordion>`,
	];

	return (
		<div className="row">
			<div className="col">
				<Card>
					<CardTitle>How was this page done?</CardTitle>
					<CardText>
						Thanks for asking! This page was made using React &
						Bootstrap. More specifically I wrapped bootstrap
						components into React components so they could be easily
						reused. I like to follow that DRY life-style.
						<br />
						<br />
						As an example, there is this <code>
							.accordion
						</code>{" "}
						class that is used to make accordions like the one seen
						in "Home". What I did is create an{" "}
						<code>Accordion</code> component with{" "}
						<code>AccordionItem</code> children. Those components
						have the classes necessary to render an accordion. This
						makes accordions (and other components) reusable, which
						reduces the workload.
						<br />
						<br />
						This is the code (withouth the text) for the accordion
						used in "Home".
						<br />
						<br />
					</CardText>
					<Code lines={codeLines} />
					<CardText>
						<br />
						<br />
						Isn't this some lean, mean, simple code?
					</CardText>
				</Card>
			</div>
		</div>
	);
};

const Thanks = () => {
	return (
		<div className="row mt-4">
			<div className="col">
				<Card>
					<CardTitle>This is a title.</CardTitle>
					<CardText>
						And this is me Jorge. <br />
						Special thanks to{" "}
						<a href="https://getbootstrap.com/">
							Bootstrap
						</a> and <a href="https://es.reactjs.org/">React</a>.{" "}
						They are amazing libraries which make this possible.
						<br />
						Wubba lubba dub dub!
					</CardText>
					<div className="row justify-content-center">
						<div className="col-auto">
							<Image src={wubba} />
						</div>
					</div>
				</Card>
			</div>
		</div>
	);
};

const EasterEgg = () => {
	return (
		<div className="row mt-4">
			<div className="col">
				<Card>
					<CardTitle>About the easter egg.</CardTitle>
					<CardText>
						Sorry, I had no time to code an easter egg for this
						project, React won't learn itself you now. Anyhow, stay
						put, there might be some in other projects.
						<br />
						<br />
						However... maybe if you press that button things change.
					</CardText>
					<div className="row justify-content-center">
						<div className="col-auto">
							<button
								type="button"
								className="btn btn-primary"
								data-bs-toggle="modal"
								data-bs-target="#saik-modal"
							>
								Change things!
							</button>
						</div>
					</div>

					{/* Normally a Portal should be used for a modal, but in this case, I'm going to ommit it */}
					<Modal id="saik-modal" title="Noup!">
						Sorry, it looks like just pressing a button to change
						things doens't actually change things. Who would've
						known. You should take this advice next time you want to
						fight for something by just writting angry tweets.
					</Modal>
				</Card>
			</div>
		</div>
	);
};

const Credits = () => {
	return (
		<div className="container-fluid">
			<Information />
			<Thanks />
			<EasterEgg />
		</div>
	);
};

export default Credits;
