import React from "react";

const PageContext = React.createContext({
	currentPage: 0,
	changePage: (pageNumber) => {},
});

export default PageContext;
