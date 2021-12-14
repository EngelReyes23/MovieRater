// import movies from "../../../data/movies";
import { useEffect, useState } from "react";
import { getAllMovies } from "../../../helpers/httpClient/moviesAPI";
import Spinner from "../spinner/Spinner";
import MoviesCard from "./MoviesCard";
import styles from "./styles/MoviesGrid.module.css";

const MoviesGrid = () => {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getAllMovies().then((res) => {
			setMovies(res.results);
			setLoading(false);
		});
	}, [movies]);

	return (
		<>
			{loading ? (
				<Spinner />
			) : (
				<div className={styles.moviesGrid}>
					{movies.map((movie) => (
						<MoviesCard key={movie.id} movie={movie} />
					))}
				</div>
			)}
		</>
	);
};

export default MoviesGrid;
