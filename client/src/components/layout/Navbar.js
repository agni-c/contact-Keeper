import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ title, icon }) => {
	return (
		<div className='navbar bg-primary'>
			<h2>
				<i className={icon} /> {title}
			</h2>
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/about'>About</Link>
				</li>
				<li>
					<Link to='/login'>Login</Link>
				</li>
				<li>
					<Link to='/register'>Register</Link>
				</li>
			</ul>
		</div>
	);
};

Navbar.prototype = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string
};

Navbar.defaultProps = {
	title: "Contact Keeper",
	icon: "fa fa-id-card"
};
export default Navbar;
