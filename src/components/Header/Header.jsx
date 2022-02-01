import React from "react";
import "../../assets/bootstrap.css";

import HeaderMenu from "./HeaderMenu";

const HeaderTitle = () => {
	return (
		<div className="row justify-content-center mt-2">
			<div className="col-auto">
				<h2>An Apple a day keeps your money away</h2>
			</div>
		</div>
	);
};

const Header = () => {
	return (
		<header className="container-fluid">
			<HeaderTitle />
			<HeaderMenu />
		</header>
	);
};

export default Header;
