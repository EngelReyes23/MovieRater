import styles from "./Login.module.css";

const Login = () => {
	return (
		<div>
			<h1 className={styles.title}>Login</h1>
			<fieldset>
				<legend>Login</legend>
				<form action="">
					<label htmlFor="email">Email</label>
					<input type="email" id="email" />
					<label htmlFor="password">Password</label>
					<input type="password" id="password" />
					<button>Login</button>
				</form>
			</fieldset>
		</div>
	);
};

export default Login;
