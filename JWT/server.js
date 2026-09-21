const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
app.use(express.json());

const users = [
  { username: "Abdullah", title: "Post 1" },
  { username: "John Doe", title: "Post 2" },
];

app.get("/", (req, res) => {
  res.json(users);
});

app.post("/login", (req, res) => {
  //Authentication
  const { username } = req.body;
});

app.listen(8080, () => {
  console.log("app is listening on port 8080");
});
