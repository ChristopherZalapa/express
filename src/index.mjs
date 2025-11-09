import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "0.0.0.0"; // bind explicitly

app.get("/", (req, res) => {
	res.status(200).send("Hello, This is the server");
});

app.listen(PORT, HOST, () => {
	console.log(`Server running at http://${PORT}`);
});
