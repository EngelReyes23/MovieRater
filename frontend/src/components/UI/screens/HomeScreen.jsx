import React from "react";
import { Header } from "../header/Header";
import MoviesGrid from "../movies/MoviesGrid";

export const HomeScreen = () => {
	return (
		<>
			<Header />
			<main>
				<MoviesGrid />
			</main>
		</>
	);
};
