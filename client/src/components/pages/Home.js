import React, { useContext, useEffect } from "react";
import Contacts from "../contacts/Contacts";
import ContactForm from "../contacts/ContactForm";
import ContactFilter from "../ContactFilter";
import AuthContext from "../../context/auth/authContext";

const Home = () => {
	const authContext = useContext(AuthContext);

	useEffect(() => {
		authContext.loadUser();
		//eslint-disable-next-line
	}, []);
	return (
		<div className='grid-2'>
			<h2>
				<ContactForm />
			</h2>
			<div>
				<ContactFilter />
				<Contacts />
			</div>
		</div>
	);
};

export default Home;
