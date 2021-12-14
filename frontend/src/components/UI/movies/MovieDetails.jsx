import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMovieByID } from "../../../helpers/httpClient/moviesAPI";
import { Header } from "../header/Header";
import Spinner from "../spinner/Spinner";
import styles from "./styles/MovieDetail.module.css";

const MovieDetails = () => {
	const { id } = useParams();
	const [data, setData] = useState({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getMovieByID(parseInt(id)).then((res) => {
			setData(res);
			setLoading(false);
		});
	}, [id]);

	// Navigation
	const navigate = useNavigate();

	// To return
	const handleClickBack = () => {
		document
			.querySelector(`.${styles.container}`)
			.classList.add("animate__fadeOutLeft");
		setTimeout(() => {
			navigate(-1);
		}, 200);
	};

	const { title, overview, poster_path, release_date } = data;

	return (
		<>
			<Header />
			{loading ? (
				<Spinner />
			) : (
				<div
					className={`${styles.container} animate__animated animate__fadeInLeft animate__faster`}
				>
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
								<strong>Genres: </strong>
								{data.genres.map((genre) => genre.name).join(", ")}
							</p>
							<p>
								<strong>Description: </strong>
								{overview}
							</p>
							<p>
								<strong>Release Date: </strong>
								{release_date}
							</p>
							<button onClick={handleClickBack}>
								<svg
									height="16"
									width="16"
									xmlns="http://www.w3.org/2000/svg"
									version="1.1"
									viewBox="0 0 1024 1024"
								>
									<path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path>
								</svg>
								<span>Back</span>
							</button>
						</div>
					</article>
				</div>
			)}
		</>
	);
};

export default MovieDetails;
