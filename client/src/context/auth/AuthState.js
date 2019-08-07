import React, { useReducer } from "react";
import axios from "axios";
import AuthContext from "./authContext";
import AuthReducer from "./authReducer";

import {
	CONTACT_ERROR,
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT,
	CLEAR_ERRORS
} from "../types";

const AuthState = props => {
	const initialState = {
		token: localStorage.getItem("token"),
		isAuthenticated: null,
		user: null,
		loading: true,
		error: null
	};

	const [state, dispatch] = useReducer(AuthReducer, initialState);

	//Load User
	const loadUser = () => console.log("loaduser");

	//Register  User
	const register = async formData => {
		const config = {
			headers: {
				"content-type": "application/json"
			}
		};
		try {
			const res = await axios.post("/api/users", formData, config);

			dispatch({
				type: REGISTER_SUCCESS,
				payload: res.data
			});
		} catch (err) {
			dispatch({
				type: REGISTER_FAIL,
				payload: err.response.data.msg
			});
		}
	};
	//Log In
	const login = () => console.log("login");

	//Log Out
	const logout = () => console.log("logout");

	//Clear Errors
	const clearErrors = () => console.log("clearErrors");

	return (
		<AuthContext.Provider
			value={{
				token: state.token,
				user: state.user,
				isAuthenticated: state.isAuthenticated,
				loading: state.loading,
				error: state.error,
				register,
				loadUser,
				login,
				logout,
				clearErrors
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthState;
