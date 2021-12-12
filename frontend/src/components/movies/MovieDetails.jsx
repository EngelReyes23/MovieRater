import { useParams, useNavigate } from "react-router-dom";
import { getMovieByID } from "../../helpers/getById";
import { Header } from "../header/Header";
import styles from "./MovieDetail.module.css";

const MovieDetails = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const { title, overview, poster_path, release_date } = getMovieByID(
		parseInt(id)
	);

	return (
		<>
			<Header />
			<div className={`${styles.container} animate__animated animate__fadeIn`}>
				<div class={styles.img}>
					<img
						src={`https:image.tmdb.org/t/p/w300${poster_path}`}
						class="img-fluid rounded-start"
						alt={title}
					/>
				</div>
				<div class={styles.details}>
					<h1 class={styles.title}>{title}</h1>
					<p class={styles.overview}>{overview}</p>
					<p class={styles.release_date}>{release_date}</p>
					<button class={styles.btn} onClick={() => navigate(-1)}>
						Back to Home
					</button>
				</div>
			</div>
		</>
	);
};

export default MovieDetails;
