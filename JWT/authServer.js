require("dotenv").config();
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
app.use(express.json());

const generateAccessToken = (user) => {
  jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15s" });
};

app.get("/posts", (req, res) => {
  res.json(users.filter((el) => el.username === req.user.name));
});

app.post("/login", (req, res) => {
  //Authentication
  const { username } = req.body;
  const user = { name: username };

  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
  res.json({ accessToken: accessToken });
});

app.listen(3000, () => {
  console.log("app is listening on port 3000");
});
