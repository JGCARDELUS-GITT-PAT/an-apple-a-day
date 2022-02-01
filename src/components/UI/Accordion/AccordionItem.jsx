import React from "react";
import "../../../assets/bootstrap.css";
import { createUniqueId } from "../../../assets/libs";

const AccordionItemHeader = (props) => {
	return (
		<h2 className="accordion-header" id={props.uid}>
			<button
				className={`accordion-button ${
					!props.expanded ? "collapsed" : ""
				}`}
				type="button"
				data-bs-toggle="collapse"
				data-bs-target={`#${props.collapseUid}`}
				aria-expanded={props.expanded}
				aria-controls={props.collapseUid}
			>
				{props.title}
			</button>
		</h2>
	);
};

const AccordionBody = (props) => {
	return (
		<div
			id={props.collapseUid}
			className={`accordion-collapse collapse ${
				props.expanded ? "show" : ""
			}`}
			aria-labelledby={props.uid}
			data-bs-parent={`#${props.parentId}`}
		>
			<div className="accordion-body">{props.children}</div>
		</div>
	);
};

const AccordionItem = (props) => {
	const uid = createUniqueId();
	const collapseUid = `collapse-${uid}`;

	return (
		<div className="accordion-item">
			<AccordionItemHeader
				uid={uid}
				collapseUid={collapseUid}
				title={props.title}
				expanded={props.expanded}
			/>
			<AccordionBody uid={uid} collapseUid={collapseUid} {...props} />
		</div>
	);
};

export default AccordionItem;
