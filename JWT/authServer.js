require("dotenv").config();
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
app.use(express.json());

let refreshTokens = [];

const generateAccessToken = (user) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15s" });
};

app.post("/refreshToken", (req, res) => {
  const { token } = req.body;
  if (token === null) return res.sendStatus(401);
  if (!refreshTokens.includes(token)) return res.sendStatus(403);
  jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    const accessToken = generateAccessToken({ name: user.name });
    refreshTokens = refreshTokens.filter((el) => el !== token);
    res.json({ accessToken: accessToken });
  });
});

app.post("/login", (req, res) => {
  //Authentication
  const { username } = req.body;
  const user = { name: username };

  const accessToken = generateAccessToken(user);
  const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
  refreshTokens.push(refreshToken);
  res.json({ accessToken: accessToken, refreshToken: refreshToken });
});

app.listen(3000, () => {
  console.log("app is listening on port 3000");
});
