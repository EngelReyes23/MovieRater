import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import MovieDetails from "../UI/movies/MovieDetails";
import { HomeScreen } from "../UI/screens/HomeScreen";
import LoginScreen from "../UI/screens/LoginScreen";

const AppRoutes = () => {
	return (
		<Router>
			<Routes>
				{/* For any route that does not match */}
				<Route path="/*" element={<Navigate to="/home" />} />

				{/* HomeScreen */}
				<Route path="/home" element={<HomeScreen />} />

				{/* LoginScreen */}
				<Route path="/login" element={<LoginScreen />} />

				{/* MovieDetails */}
				<Route path="/movie/:id" element={<MovieDetails />} />
			</Routes>
		</Router>
	);
};

export default AppRoutes;
