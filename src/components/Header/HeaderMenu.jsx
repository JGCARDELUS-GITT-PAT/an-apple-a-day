import React, { useContext } from "react";
import "../../assets/bootstrap.css";

import HeaderMenuItem from "./HeaderMenuItem";
import PageContext from "../../store/page-context";
import { Pages } from "../../store/PageProvider";

const HeaderMenu = (props) => {
	const { currentPage } = useContext(PageContext);

	const pages = [
		{
			name: "Home",
			pageNumber: Pages.HOME,
			active: currentPage === Pages.HOME,
		},
		{
			name: "Products",
			pageNumber: Pages.PRODUCTS,
			active: currentPage === Pages.PRODUCTS,
		},
		{
			name: "Store",
			pageNumber: Pages.STORE,
			active: currentPage === Pages.STORE,
		},
		{
			name: "Credits",
			pageNumber: Pages.CREDITS,
			active: currentPage === Pages.CREDITS,
		},
	];

	return (
		<div className="row justify-content-center">
			{pages.map((page) => {
				return <HeaderMenuItem key={page.pageNumber} {...page} />;
			})}
		</div>
	);
};

export default HeaderMenu;
