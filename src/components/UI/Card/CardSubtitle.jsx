import React from "react";
import "../../../assets/bootstrap.css";

const CardSubtitle = (props) => {
	return <p className="card-subtitle mb-2 text-muted">{props.children}</p>;
};

export default CardSubtitle;
