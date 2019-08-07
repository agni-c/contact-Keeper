const express = require("express"),
	router = express.Router();

const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const config = require("config");
const User = require("../models/User");
const auth = require("../middleware/auth");

// @route GET api/auth
//@desc     Get logged in user
//@access   private
router.get("/", auth, async (req, res) => {
	try {
		const user = await User.findById(req.user.id).select("-password"); //omitting the password
		res.json(user);
	} catch (err) {
		console.error(err.message);
		res.status(500).send("auth error");
	}
});

// @route POST api/auth
//@desc     Auth user & get token
//@access   Public
router.post(
	"/",
	[
		check("email", "enter a valid email").isEmail(),
		check("password", "password is required").exists()
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { email, password } = req.body;

		try {
			let user = await User.findOne({ email });

			if (!user) {
				return res.status(400).json({ msg: "Enter Valid credentials" });
			}

			// const isMatch = await bcrypt.compare(pasword, user.pasword);
			const isMatch = await bcrypt.compare(password, user.password);

			if (!isMatch) {
				return res.status(400).json({ msg: "Enter Valid credentials" });
			}

			const payload = {
				user: {
					id: user.id
				}
			};
			jwt.sign(
				payload,
				config.get("jwtSecret"),
				{
					expiresIn: "7d"
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
			res.status(400).send("auth error");
		}
	}
);

module.exports = router;
