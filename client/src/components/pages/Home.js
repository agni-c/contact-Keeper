import React from "react";
import Contacts from "../contacts/Contacts";
import ContactForm from "../contacts/ContactForm";
import ContactFilter from "../ContactFilter";

const Home = () => {
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
