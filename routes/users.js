const express = require("express"),
	router = express.Router();

// @route POST api/users
//@desc     Register a user
//@access   public
router.post("/", (req, res) => {
	res.send("Register a user");
});

module.exports = router;
