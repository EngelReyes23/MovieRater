import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export const Header = () => {
	return (
		<header className={styles.header}>
			<h1>
				<Link to="/home" className={styles.home}>
					Movies
				</Link>
			</h1>
		</header>
	);
};
