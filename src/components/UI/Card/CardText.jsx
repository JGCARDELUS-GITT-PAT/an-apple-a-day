import React from "react";
import "../../../assets/bootstrap.css";

const CardText = (props) => {
	return <p className="card-text">{props.children}</p>;
};

export default CardText;
