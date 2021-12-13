import { useParams, useNavigate } from "react-router-dom";
import { getMovieByID } from "../../../helpers/getById";
import { Header } from "../header/Header";
import styles from "./styles/MovieDetail.module.css";

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
				<article className={styles.card}>
					<div>
						<img
							src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
							alt={title}
							className={styles.poster}
						/>
					</div>
					<div className={styles.details}>
						<p>
							<strong>Title: </strong>
							{title}
						</p>
						<p>
							<strong>Description: </strong>
							{overview}
						</p>
						<p>
							<strong>Release Date: </strong>
							{release_date}
						</p>
						<button className={styles.button} onClick={() => navigate(-1)}>
							Go back
						</button>
					</div>
				</article>
			</div>
		</>
	);
};

export default MovieDetails;
