import React from "react";
import "../../../assets/bootstrap.css";

const Image = (props) => {
	return <img src={props.src} alt={props.alt} className="img-fluid" />;
};

export default Image;
