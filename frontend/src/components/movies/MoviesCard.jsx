import { Link } from "react-router-dom";

const MoviesCard = ({ movie }) => {
	const { title, id, overview, poster_path } = movie;
	return (
		// Cards bootstrap
		<>
			<Link to={`/movie/${id}`} class="text-decoration-none">
				<div class="col text-dark animate__animated animate__fadeInUp">
					<div class="card h-100">
						<img
							src={`https:image.tmdb.org/t/p/w300${poster_path}`}
							class="card-img-top"
							alt={title}
						/>
						<div class="card-body">
							<h5 class="card-title">{title}</h5>
							<p class="card-text">{overview}</p>
						</div>
						<button class="text-center btn btn-primary ">View movie</button>
					</div>
				</div>
			</Link>
		</>
	);
};

export default MoviesCard;
