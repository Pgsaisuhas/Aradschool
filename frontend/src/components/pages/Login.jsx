import { useNavigate } from "react-router-dom"
import { AuthData } from "../../auth/AuthWrapper"
import { useState } from "react"

export const Login = () =>{
    const navigate = useNavigate()
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
			navigate("/");
		} catch (error) {
			console.log("login failed!!")
		}
		// if (res){
			
		// }else{
		// 	console.log("login failed")
		// }
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="email"
				placeholder="Email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				required
			/>
			<input
				type="password"
				placeholder="Password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				required
			/>
			<button type="submit">Login</button>
			{error && <p style={{ color: "red" }}>{error}</p>}
		</form>
	);

}