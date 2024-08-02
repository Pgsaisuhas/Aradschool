import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { AuthData } from "../../auth/AuthWrapper";
import { useState } from "react";
const RegisterHandle = styled.div`
	/* CSS file (e.g., Register.css) */

	/* Register.css */

	/* Register.css */

	body {
		background-color: #1a2b38;
		font-family: "Arial", sans-serif;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		margin: 0;
	}

	.container {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	.form-container {
		padding: 20px;
		background: #2c3e50;
		border-radius: 8px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		width: 100%;
		max-width: 400px;
	}

	form {
		display: flex;
		flex-direction: column;
	}

	input[type="text"],
	input[type="email"],
	input[type="password"] {
		width: calc(100% - 22px);
		padding: 10px;
		margin: 10px 0;
		border: 1px solid #ccc;
		border-radius: 4px;
		font-size: 16px;
		background-color: #f9f9f9;
	}

	button[type="submit"] {
		background-color: #007bff;
		color: white;
		padding: 10px 20px;
		margin: 10px 0;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		font-size: 16px;
		text-transform: uppercase;
	}

	button[type="submit"]:hover {
		background-color: #0056b3;
	}

	h2 {
		text-align: center;
		color: #fff;
		margin-bottom: 20px;
	}

	p {
		margin: 10px 0 0;
		font-size: 14px;
		color: #fff;
		text-align: center;
	}

	.error {
		color: red;
		text-align: center;
		margin-top: 10px;
	}
`;
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
		<RegisterHandle>

		<div className="container">
            <div className="form-container">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Your Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Register</button>
                    {error && <p className="error">{error}</p>}
                </form>
            </div>
			</div>
		</RegisterHandle>
	);
};