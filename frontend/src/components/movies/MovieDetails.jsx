import { useParams, useNavigate } from "react-router-dom";
import { getMovieByID } from "../../helpers/getById";
import { Header } from "../header/Header";

const MovieDetails = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const { title, overview, poster_path, release_date } = getMovieByID(
		parseInt(id)
	);

	return (
		<>
			<Header />
			<div className="container mt-3 animate__animated animate__fadeIn">
				<div class="card mb-3 shadow-lg">
					<div class="row g-0">
						<div class="col-md-4">
							<img
								src={`https:image.tmdb.org/t/p/w300${poster_path}`}
								class="img-fluid rounded-start"
								alt={title}
							/>
						</div>
						<div class="col-md-8">
							<div class="card-body">
								<h5 class="card-title h2">{title}</h5>
								<p class="card-text">{overview}</p>
								<p class="card-text">{`Release date: ${release_date}`}</p>
							</div>
							<button
								className="btn btn-primary"
								onClick={() => {
									navigate(-1);
								}}
							>
								Back
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default MovieDetails;
