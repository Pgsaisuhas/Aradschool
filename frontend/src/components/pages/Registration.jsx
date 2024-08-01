import React from "react";



import { useNavigate } from "react-router-dom";
import { AuthData } from "../../auth/AuthWrapper";
import { useState } from "react";

export const Register = () => {
	const navigate = useNavigate();
	// const { login } = AuthData()
	const { handleRegister, error } = AuthData();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	// const [errorMessage, setErrorMessage] = useState(null)

	const handleSubmit = async (e) => {
		e.preventDefault();
		// const res = handleLogin(email, password);
		// console.log(res)
		// console.log("Navigating to desired page");
		// navigate("/profile");
		try {
			await handleRegister(name, email, password);
			console.log("Regitration success!!")
			navigate("/login");
		} catch (error) {
			console.log("Registration failed!!");
		}
		// if (res){

		// }else{
		// 	console.log("login failed")
		// }
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Username..."
				value={name}
				onChange={(e) => setName(e.target.value)}
				required
			/>
			<input
				type="email"
				placeholder="Email..."
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				required
			/>
			<input
				type="password"
				placeholder="Password..."
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				required
			/>
			<button type="submit">Register</button>
			{error && <p style={{ color: "red" }}>{error}</p>}
		</form>
	);
};