const express = require("express");
const path = require("path");

const app = express();

const PORT = 3000;

app.use(express.static(path.join(__dirname)));





app.get("/health", (req, res) => {

res.status(200).json({

status: "OK",

message: "Server is healthy"

});

});

app.get("/", (req, res) => {
res.sendFile(path.join(__dirname,"index.html"));
});

if (require.main === module) {

app.listen(PORT, () => {

console.log("Server running on port " + PORT);

});

}

module.exports = app;