import React, { useState } from "react";

import PageContext from "./page-context";

export const Pages = {
	HOME: 0,
	PRODUCTS: 1,
	STORE: 2,
	CREDITS: 3,
};

const PageProvider = (props) => {
	const [pageState, setPageState] = useState(0);

	const changePageHandler = (pageNumber) => {
		const pageNumberExists = Object.values(Pages).includes(pageNumber);
		if (pageNumberExists) {
			setPageState(pageNumber);
		}
	};

	const pageContext = {
		currentPage: pageState,
		changePage: changePageHandler,
	};
	return (
		<PageContext.Provider value={pageContext}>
			{props.children}
		</PageContext.Provider>
	);
};

export default PageProvider;
