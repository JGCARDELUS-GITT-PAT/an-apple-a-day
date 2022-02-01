import React from "react";

import Card from "../UI/Card/Card";
import CardTitle from "../UI/Card/CardTitle";
import CardText from "../UI/Card/CardText";
import Lorem from "../UI/Lorem/Lorem";

import Accordion from "../UI/Accordion/Accordion";
import AccordionItem from "../UI/Accordion/AccordionItem";

const Introduction = () => {
	return (
		<div className="row">
			<div className="col">
				<Card>
					<CardTitle>We're back with more tech info</CardTitle>
					<CardText>
						In our{" "}
						<a href="https://jgcardelus-gitt-pat.github.io/a-window-into-html/index.html">
							last project
						</a>{" "}
						we tackled Microsoft. Now it's Apple's time. We'll talk
						about Apple while using React and Bootstrap to learn
						about these two technologies.
						<br />
						<br />
						<strong>
							Also please note that this page is a joke. Don't
							take this seriously.
						</strong>{" "}
						(You might also be wandering what happened to that
						awesome alert that showed up when you entered the
						Microsoft page. Well I didn't have time to code one now,
						so there you go.)
					</CardText>
				</Card>
			</div>
		</div>
	);
};

const BasicInfo = () => {
	return (
		<div className="row mt-4">
			<div className="col">
				<Card>
					<CardTitle>Who are we?</CardTitle>
					<CardText>
						We are a company that charges insane prices for pretty
						awesome tech, so maybe it's justified. We are very
						concerned with the ecosystem, that's why we don't
						include chargers nor earphones with our phones (but we
						change the charger port each year so you still need to
						buy a new charger). What else... Let us think, ¡Aha!
						While we do care about environment, we don't care so
						much for the workers in the factories, they have it
						pretty bad. Our software is awesome though, and we have
						this ecosystem that ties everything toghether. Our
						products work seamlessly with one another, no one else
						can do that. The ecosystem also has a nice side-effect,
						once in you cannot get out.
						<br />
						<br />
						Sent from a MacBook Air :)
					</CardText>
				</Card>
			</div>
		</div>
	);
};

const MainProducts = () => {
	return (
		<React.Fragment>
			<div className="row mt-4">
				<div className="col">
					<Card>
						<div className="row mb-2">
							<div className="col">
								<CardTitle>
									These are some of our products
								</CardTitle>
							</div>
						</div>
						<Accordion id="main-products">
							<AccordionItem
								title="iPhone"
								parentId="main-products"
							>
								<p>
									This our money cow if you wish. People
									cannot seem to stop buying the iPhone even
									though we just change the corners from
									round, to square and back again to round.
									It's amazing. We also create things that
									just work with iPhone (you now, for that
									ecosystem lock). Those things were not
									necessary in the first place, so we forced
									it a little bit. For example, remember the
									Jack 3.5mm connector, we removed so we could
									sell the AirPods for an extra 150$. But, on
									the other hand, iPhone works amazingly, it's
									fast, it's cool and it gets updates more
									than any other device. AirPods, although
									expensive are really convinient and we made
									a billion market from it.
								</p>
							</AccordionItem>
							<AccordionItem
								title="iPad"
								parentId="main-products"
							>
								<p>
									This is just a bigger iPhone. It was useless
									until we launched iPad OS which enabled
									people to actually utilize all the power
									available in those bad boys. Students seem
									to love it.
								</p>
							</AccordionItem>
							<AccordionItem
								title="MacBook"
								parentId="main-products"
							>
								<p>
									This is just a bigger MacBook. No, just
									kidding. MacBooks are pretty awesome, they
									are UNIX based, which cannot be said about
									PC. This helps developers. For
									non-developers (a.k.a. muggles) it also
									brings a cohesive UI/UX experience and again
									works seamlessly with all products. This
									UI/UX cohesiviness sometimes goes too far.
									For example, we made a useless keyboard and
									an overheating computer in 2019 trying to
									make the laptop smaller. We also started
									developing our own chips in-house which has
									made Intel very mad.
								</p>
							</AccordionItem>
							<AccordionItem
								title="Apple Watch / Air Pods"
								parentId="main-products"
							>
								<p>
									This is just a smaller iPhone. Also not. The
									Apple Watch is cool but doesn't do much.
									AirPods are awesome.
								</p>
							</AccordionItem>
						</Accordion>
					</Card>
				</div>
			</div>
		</React.Fragment>
	);
};

const Home = () => {
	return (
		<div className="container-fluid">
			<Introduction />
			<BasicInfo />
			<MainProducts />
			<Lorem />
		</div>
	);
};

export default Home;
