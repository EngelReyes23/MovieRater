import movies from "../../data/movies.json";
import MoviesCard from "./MoviesCard";

const MoviesGrid = () => {
	return (
		<main className="container">
			<div className="row row-cols-1 row-cols-md-4 g-4">
				{movies.map((movie) => (
					<MoviesCard key={movie.id} movie={movie} />
				))}
			</div>
		</main>
	);
};

export default MoviesGrid;
