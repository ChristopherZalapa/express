import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

const mockUsers = [
	{ id: 1, username: "Gina", displayName: "Gina" },
	{ id: 2, username: "Chris", displayName: "Chris" },
	{ id: 3, username: "Eddie", displayName: "Eddie" },
];

app.get("/", (request, response) => {
	response.status(201).send({ msg: "Hello" });
});

app.get("/api/users", (request, response) => {
	response.send(mockUsers);
});

app.get("/api/users/:id", (request, response) => {
	// console.log(request.params);

	const parsedId = parseInt(request.params.id);
	// console.log("The parsed ID is:", parsedId);
	if (isNaN(parsedId))
		return response.status(400).send({ msg: "Bad Request. Invalid ID" });

	const findUser = mockUsers.find((user) => user.id === parsedId);
	if (!findUser) return response.statusCode(404);
	return response.send(findUser);
});

app.get("/api/products", (request, response) => {
	response.send([{ id: 123, name: "Chicken Breast", price: 12.99 }]);
});

app.listen(PORT, () => {
	console.log(`Server running at http://${PORT}`);
});
