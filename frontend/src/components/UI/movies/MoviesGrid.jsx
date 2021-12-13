import movies from "../../../data/movies";
import MoviesCard from "./MoviesCard";
import styles from "./styles/MoviesGrid.module.css";

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
