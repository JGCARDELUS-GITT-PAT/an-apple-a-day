import React from "react";
import "../../../assets/bootstrap.css";

const CardTitle = (props) => {
	return <h5 className="card-title">{props.children}</h5>;
};

export default CardTitle;
