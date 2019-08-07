const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const User = require("../models/User");
const { check, validationResult } = require("express-validator");

// @route POST api/users
//@desc     Register a user
//@access   public
router.post(
	"/",
	[
		check("name", "Enter Your name")
			.not()
			.isEmpty(),
		check("email", "Enter Your email").isEmail(),
		check("password", "Enter Your password 6 to 12 charactors").isLength({
			min: 6
		})
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { name, email, password } = req.body;

		try {
			let user = await User.findOne({ email });

			if (user) {
				return res.status(400).json({ msg: "user already exists" });
			}
			//using model
			user = new User({
				name,
				email,
				password
			});

			const salt = await bcrypt.genSalt(10);
			user.password = await bcrypt.hash(password, salt);

			await user.save();

			const payload = {
				user: {
					id: user.id
				}
			};
			jwt.sign(
				payload,
				config.get("jwtSecret"),
				{
					expiresIn: 3600000000
				},
				(err, token) => {
					if (err) {
						throw err;
					}
					res.json({ token });
				}
			);
		} catch (err) {
			console.error(err.message);
			res.status(500).send("Server Error");
		}
	}
);

module.exports = router;
