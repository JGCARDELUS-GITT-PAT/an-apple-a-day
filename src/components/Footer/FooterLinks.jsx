import React, { useContext } from "react";
import "../../assets/bootstrap.css";

import PageContext from "../../store/page-context";
import { Pages } from "../../store/PageProvider";

import Button from "../UI/Button/Button";

const FooterLinks = () => {
	const pageContext = useContext(PageContext);
	const currentPage = pageContext.currentPage;

	// This is not very DRY compliant, but i'll turn a blind eye, for now.
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

	const menuItemClickHandler = (pageNumber) => {
		pageContext.changePage(pageNumber);
	};

	return (
		<React.Fragment>
			<div className="row mt-4">
				<div className="col">
					<p className="lead">
						I just learned how to code React apps. So this is a
						React app, with a table with links ?!?!?!?!??!?!
					</p>
					<p>
						Note: They aren't really links. I haven't learned how to
						do that yet in React, so for now, this is a one-page
						app.
					</p>
				</div>
			</div>
			<div className="row mt-2">
				<div className="col">
					<table className="table">
						<thead>
							<tr>
								<td scope="col">Page Name</td>
								<td scope="col">Page Link</td>
							</tr>
						</thead>
						<tbody>
							{pages.map((page) => {
								return (
									<tr key={page.pageNumber}>
										<td>{page.name}</td>
										<td>
											<Button
												onClick={menuItemClickHandler.bind(
													null,
													page.pageNumber
												)}
												type="btn-primary"
											>
												{page.name}
											</Button>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>
		</React.Fragment>
	);
};

export default FooterLinks;
