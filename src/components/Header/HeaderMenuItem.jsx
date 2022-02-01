import React, { useContext } from "react";
import styles from "./HeaderMenuItem.module.css";

import PageContext from "../../store/page-context";

const HeaderMenuItem = (props) => {
	const pageContext = useContext(PageContext);

	const menuItemClickHandler = () => {
		pageContext.changePage(props.pageNumber);
	};

	const menuItemClasses = `col-auto ${props.active ? styles.active : ""} ${
		styles.item
	}`;
	return (
		<div className={menuItemClasses} onClick={menuItemClickHandler}>
			<p>{props.name}</p>
		</div>
	);
};

export default HeaderMenuItem;
