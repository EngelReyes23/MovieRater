import { Link } from "react-router-dom";
import styles from "./styles/MoviesCard.module.css";

const MoviesCard = ({ movie }) => {
	const { title, id, poster_path, release_date } = movie;
	return (
		<>
			<Link to={`/movie/${id}`} className={styles.card}>
				<div class={`animate__animated animate__fadeIn`}>
					<div>
						<img
							src={`https:image.tmdb.org/t/p/w300${poster_path}`}
							alt={title}
							className={styles.card_img}
						/>
					</div>
					<div>
						<h3>{title}</h3>
						<p>{release_date.substring(0, 4)}</p>
					</div>
				</div>
			</Link>
		</>
	);
};

export default MoviesCard;
