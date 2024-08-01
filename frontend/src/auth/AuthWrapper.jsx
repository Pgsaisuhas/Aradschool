import { createContext, useContext, useState, useEffect, Children} from "react";
import axios from "axios";
import { RenderMenu, RenderRoutes } from "../components/RenderNavigation";
import { api } from "./api";
import { Login } from "../components/pages/Login";
const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);

export const AuthWrapper = () => {
	// const [user, setUser] = useState({ isAuthenticated: false });
	// const [token, setToken] = useState(null);

	// const register = (name, email, password) => {
	// 	axios
	// 		.post("http://127.0.0.1:8000/register/", {
	// 			name,
	// 			email,
	// 			password,
	// 		})
	// 		.then((response) => {
	// 			console.log(response);
	// 		})
	// 		.catch((error) => {
	// 			console.log(error);
	// 		});
	// };

	// const login = async (email, password) => {
	// 	try {
	// 		const loginResponse = await axios.post("http://127.0.0.1:8000/login/", {
	// 			email,
	// 			password,
	// 		});
	// 		const jwtToken = loginResponse.data.jwt;
	// 		console.log("Login Successful:", jwtToken);
	// 		setToken(jwtToken);

	// 		const userResponse = await axios.get("http://127.0.0.1:8000/user/", {
	// 			headers: {
	// 				Authorization: `Bearer ${jwtToken}`,
	// 			},
	// 		});
	// 		console.log(
	// 			"User Name:",
	// 			userResponse.data.name,
	// 			"User Email:",
	// 			userResponse.data.email
	// 		);
	// 		setUser({ isAuthenticated: true });
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

	// const logout = () => {
	// 	setUser({ isAuthenticated: false });
	// 	setToken(null);
	// 	console.log("Logged out");
	// };

	// return (
	// 	<AuthContext.Provider value={{ user, register, login, logout }}>
	// 		<>
	// 			<RenderMenu />
	// 			<RenderRoutes />
	// 		</>
	// 	</AuthContext.Provider>
	// );

    const [user, setUser] = useState(false);
    const [error, setError] = useState("");
    const [userData, setUserData] = useState({"name": '', "email": ''})

    useEffect(() => {
        checkAuth();
    }, []);

    const checkAuth = async () => {
        try {
            const response = await api.get("/user/");
            console.log(response)
            setUser(true);
            setUserData({"name": response.data.name, "email": response.data.email})
        } catch (error) {
            setUser(false);
        }
    };
	const handleRegister = async (name, email, password) => {
		try {
			await api.post("/register/", { name, email, password });
			// setUser(true);
			// checkAuth();
			return true;
		} catch (error) {
			setError(error.response?.data?.error || "An error occurred");
			return false;
		}
	};

    const handleLogin = async (email, password) => {
			try {
				await api.post("/login/", { email, password });
                setUser(true );
				checkAuth();
				return true
				
			} catch (error) {
				setError(error.response?.data?.error || "An error occurred");
				return false
			}
		};

    const handleLogout = async () => {
        try {
            await api.post("/logout/");
            setUser( false);
        } catch (error) {
            console.error("Logout failed", error);
        }
    };

    const handleDeleteAccount = async () => {
        try {
            await api.delete("/delete-account/");
            setUser(false);
        } catch (error) {
            console.error("Delete account failed", error);
        }
    };


    return (
			<AuthContext.Provider
				value={{ user, userData, error, handleRegister, handleLogin, handleLogout, handleDeleteAccount }}
			>
				{/* {Children} */}
				<h1>Authentication Demo</h1>
				{/* <Login /> */}
				<RenderMenu />
				<RenderRoutes />
			</AuthContext.Provider>
		);
};
