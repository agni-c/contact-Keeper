const express = require("express"),
	app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => res.json({ msg: "welcome" }));

//Define Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/contacts", require("./routes/contacts"));
app.use("/api/auth", require("./routes/auth"));

app.listen(PORT, () => console.log(`server has started at PORT:${PORT}`));
