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
			<div className={`animate__animated animate__fadeIn`}></div>
		</>
	);
};

export default MovieDetails;
