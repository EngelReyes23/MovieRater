import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import { HomeScreen } from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";

const AppRoutes = () => {
	return (
		<Router>
			<Routes>
				{/* Para culaquier ruta que no coincida */}
				<Route path="/*" element={<Navigate to="/login" />} />

				{/* HomeScreen */}
				<Route path="/home" element={<HomeScreen />} />

				{/* LoginScreen */}
				<Route path="/login" element={<LoginScreen />} />
			</Routes>
		</Router>
	);
};

export default AppRoutes;
