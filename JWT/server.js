const express = require("express");
const app = express();

const users = [
  { username: "Abdullah", title: "Post 1" },
  { username: "John Doe", title: "Post 2" },
];

app.get("/", (req, res) => {
  res.json(users);
});

app.listen(8080, () => {
  console.log("app is listening on port 8080");
});
