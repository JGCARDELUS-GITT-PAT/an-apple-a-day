import React from "react";

import Card from "../UI/Card/Card";
import CardTitle from "../UI/Card/CardTitle";
import CardText from "../UI/Card/CardText";

import Lorem from "../UI/Lorem/Lorem";

import Image from "../UI/Image/Image";
import iPhoneImage from "../../assets/iphone.jpeg";

const ProductImage = () => {
	return (
		<div className="row">
			<div className="col">
				<Card>
					<CardTitle>Some of our product(s?).</CardTitle>
					<div className="row justify-content-center">
						<div className="col-auto">
							<Image src={iPhoneImage} alt="An image" />
						</div>
					</div>
				</Card>
			</div>
		</div>
	);
};

const ThatIntern = () => {
	return (
		<div className="row mt-4">
			<div className="col">
				<Card>
					<CardTitle>That intern.</CardTitle>
					<CardText>
						Yes. We haven't fired him yet. We don't know why he
						keeps deleting all photos except one.
					</CardText>
				</Card>
			</div>
		</div>
	);
};

const Products = () => {
	return (
		<div className="container-fluid">
			<ProductImage />
			<ThatIntern />
			<Lorem />
		</div>
	);
};

export default Products;
