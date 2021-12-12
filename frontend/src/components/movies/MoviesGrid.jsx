import movies from "../../data/movies.json";
import MoviesCard from "./MoviesCard";
import styles from "./MoviesGrid.module.css";

const MoviesGrid = () => {
	return (
		<main>
			<div className={styles.moviesGrid}>
				{movies.map((movie) => (
					<MoviesCard key={movie.id} movie={movie} />
				))}
			</div>
		</main>
	);
};

export default MoviesGrid;
