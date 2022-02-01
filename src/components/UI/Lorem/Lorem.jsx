import React from "react";

import Card from "../Card/Card";
import CardTitle from "../Card/CardTitle";
import CardText from "../Card/CardText";

const Lorem = () => {
	return (
		<div className="row mt-4">
			<div className="col">
				<Card>
					<CardTitle>This is your classic lorem ipsum</CardTitle>
					<CardText>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Deserunt similique alias, animi nam nesciunt repellendus
						fuga dicta quod, id doloribus, maxime quis reprehenderit
						itaque ullam dolore voluptatibus labore numquam laborum.
					</CardText>
				</Card>
			</div>
		</div>
	);
};

export default Lorem;
