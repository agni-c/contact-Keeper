const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = (req, res, next) => {
	//get token header
	const token = req.header("x-auth-token");
	//check if not token
	if (!token) {
		return res.status(401).send({ msg: "No Token, Authorization denied" });
	}

	try {
		const decoded = jwt.verify(token, config.get("jwtSecret"));

		req.user = decoded.user;
		next();
	} catch (err) {
		return res.status(401).json({ msg: "No Token, Authorization denied" });
	}
};
