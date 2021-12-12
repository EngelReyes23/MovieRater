import movies from "../data/movies.json";

export const getMovieByID = (id) => movies.find((movie) => movie.id === id);
