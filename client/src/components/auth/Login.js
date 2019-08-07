import React, { useState } from "react";

const Login = () => {
	const [user, setUser] = useState({
		email: "",
		password: ""
	});

	const { email, password } = user;

	const onchange = e => setUser({ ...user, [e.target.name]: e.target.value });

	const onSubmit = e => {
		e.preventDefault();
		console.log("login Submitted");
	};

	return (
		<div className='form-container'>
			<h1>
				Account <span className='text-primary'>Login</span>
			</h1>

			<form onSubmit={onSubmit}>
				<div className='form-group'>
					<label htmlFor='email'>Email</label>
					<input type='email' name='email' value={email} onChange={onchange} />
				</div>

				<div className='form-group'>
					<label htmlFor='password'>Password</label>
					<input
						type='password'
						name='password'
						value={password}
						onChange={onchange}
					/>
				</div>

				<input
					type='submit'
					value='Register'
					className='btn btn-primary btn-block'
				/>
			</form>
		</div>
	);
};

export default Login;
