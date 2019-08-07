import React, { useContext } from "react";
import PropTypes from "prop-types";
import ContactContext from "../../context/contact/contactContext";

const ContactItems = ({ contact }) => {
	const contactContext = useContext(ContactContext);

	const { deleteContact, setCurrent, clearCurrent } = contactContext;
	const { id, name, email, phone, type } = contact;

	const onDelete = () => {
		deleteContact(id);
		clearCurrent();
	};

	return (
		<div className='card bg-light'>
			<h3 className='text-primary text-left'>
				{name}{" "}
				<span
					style={{ float: "right" }}
					className={
						"badge " +
						(type === "professional" ? "badge-success" : "badge-primary")
					}
				>
					{type.charAt(0).toUpperCase() + type.slice(1)}
				</span>
				<ul className='list'>
					{/* if there is an email then only it will show */}
					{email && (
						<li>
							<i className='fa fa-envelope-open' />
							{email}
						</li>
					)}
					{phone && (
						<li>
							<i className='fa fa-phone' />
							{phone}
						</li>
					)}
				</ul>
				<p>
					<button
						className='btn btn-dark btn-sm'
						onClick={() => setCurrent(contact)}
					>
						Edit
					</button>
					<button className='btn btn-danger btn-sm' onClick={onDelete}>
						Delete
					</button>
				</p>
			</h3>
		</div>
	);
};
ContactItems.propTypes = {
	contact: PropTypes.object.isRequired
};

export default ContactItems;
