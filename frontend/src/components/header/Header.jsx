import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
	return (
		<header className="text-center bg-dark shadow p-1 fixed-top">
			<h1 className="text-white h2">
				<Link to="/home" className="text-white text-decoration-none">
					Movies
				</Link>
			</h1>
		</header>
	);
};
