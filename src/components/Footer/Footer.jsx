import React from "react";
import FooterLinks from "./FooterLinks";

import styles from "./Footer.module.css";

const Footer = () => {
	return (
		<div className={`${styles.footer} continer-fluid`}>
			<div className="row">
				<div className="col">
					<h3>This is the footer.</h3>
					<p className="subtitle text-muted">
						Remember? It's a reference to the{" "}
						<a href="https://jgcardelus-gitt-pat.github.io/a-window-into-html/index.html">
							last project
						</a>
						.
					</p>
				</div>
			</div>
			<FooterLinks />
		</div>
	);
};

export default Footer;
