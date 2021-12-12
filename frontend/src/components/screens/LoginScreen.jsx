const LoginScreen = () => {
	return (
		<div className="container">
			<h1 className="text-center text-primary">Login Screen</h1>

			<form>
				<div className="form-group">
					<label htmlFor="email">Email address</label>
					<input
						type="email"
						className="form-control mt-1"
						id="email"
						placeholder="Enter email"
					/>
				</div>
				<div className="form-group mt-2">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						className="form-control mt-1"
						id="password"
						placeholder="Password"
					/>
				</div>
				<button type="submit" className="btn btn-primary mt-2">
					Submit
				</button>
			</form>
		</div>
	);
};

export default LoginScreen;
