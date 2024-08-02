import { useNavigate, useLocation } from "react-router-dom"
import { AuthData } from "../../auth/AuthWrapper"
import { useState } from "react"
import styled from "styled-components";
const LoginContainer = styled.div`
	background-color: #1a2b38;
	font-family: "Arial", sans-serif;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	// margin: 0;	

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



export const Login = () =>{
    const navigate = useNavigate()
	const location = useLocation();
    // const { login } = AuthData()
    const { handleLogin, error } = AuthData();
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const [errorMessage, setErrorMessage] = useState(null)

     const handleSubmit = async (e) => {
		e.preventDefault();
		// const res = handleLogin(email, password);
		// console.log(res)
		// console.log("Navigating to desired page");
		// navigate("/profile");
		try {
			await handleLogin(email, password);
			console.log(location.state?.from);
			const redirectTo = location.state?.from || "/";
			console.log("Redirecting to:", redirectTo);
			navigate(redirectTo);
		} catch (error) {
			console.log("login failed!!")
		}
		// if (res){
			
		// }else{
		// 	console.log("login failed")
		// }
	};

	return (
		<LoginContainer>
			<div className="form-container">
				<h2>Login</h2>
				<form onSubmit={handleSubmit}>
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
					<button type="submit">Login</button>
					{error && <p className="error">{error}</p>}
				</form>
			</div>
		</LoginContainer>
	);

}