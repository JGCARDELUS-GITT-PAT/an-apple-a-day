import React, { useContext } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import PageProvider, { Pages } from "./store/PageProvider";
import PageContext from "./store/page-context";

import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import Store from "./components/Store/Store";
import Credits from "./components/Credits/Credits";

const ActivePage = () => {
	const pageContext = useContext(PageContext);
	let activePage;
	switch (pageContext.currentPage) {
		case Pages.HOME:
			activePage = <Home />;
			break;
		case Pages.PRODUCTS:
			activePage = <Products />;
			break;
		case Pages.STORE:
			activePage = <Store />;
			break;
		case Pages.CREDITS:
			activePage = <Credits />;
			break;
		default:
			activePage = <Home />;
			break;
	}

	return activePage;
};

function App() {
	return (
		<PageProvider>
			<Header />
			<div className="row justify-content-center">
				<div className="col-auto">
					<main>
						<ActivePage />
					</main>
				</div>
			</div>
			<Footer />
		</PageProvider>
	);
}

export default App;
