const express = require("express"),
	router = express.Router();

// @route POST api/contacts
//@desc     Add a contact
//@access   private
router.post("/", (req, res) => {
	res.send("Add a contact");
});

// @route GET api/contacts
//@desc     Get all contacts
//@access   private
router.get("/", (req, res) => {
	res.send("Get all contacts");
});

// @route PUT api/contacts/:id
//@desc     Update all contacts
//@access   private
router.put("/:id", (req, res) => {
	res.send("Update Contacts");
});

// @route DELETE api/contacts/:id
//@desc    Delete contacts
//@access   private
router.delete("/:id", (req, res) => {
	res.send("Delete Contacts");
});

module.exports = router;
